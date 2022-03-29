import { Component } from "../core/component";
import { apiService } from "./../services/api.service";
import { TransformService } from "./../services/transform.service";
import { renderPost } from "./../templates/post.template";

class PostsComponent extends Component {
  constructor(id, { loader }) {
    super(id);
    this.loader = loader;
  }

  init() {
    this.$el.addEventListener("click", buttonHandler.bind(this));
  }

  async onShow() {
    this.loader.show();
    const fbData = await apiService.fetchPosts();
    const posts = TransformService.fbObjectToArray(fbData);
    const html = posts
      .map((post) => renderPost(post, { needButton: true }))
      .join(" ");
    this.loader.hide();
    this.$el.insertAdjacentHTML("afterbegin", html);
  }

  onHide() {
    this.$el.innerHTML = "";
  }
}

function buttonHandler(event) {
  const elem = event.target;
  const id = elem.dataset.id;
  if (id) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.includes(id)) {
      elem.textContent = "Сохранить";
      elem.classList.add("button-success");
      elem.classList.remove("button-danger");

      favorites = favorites.filter((favId) => favId !== id);
    } else {
      elem.classList.remove("button-success");
      elem.classList.add("button-danger");
      elem.textContent = "Удалить";

      favorites.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}

export { PostsComponent };
