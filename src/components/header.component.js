import { Component } from "../core/component";

class HeaderComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    if (localStorage.getItem("visited")) {
      this.hide();
    }
    const btn = this.$el.querySelector("button");
    btn.addEventListener("click", buttonHandler.bind(this));
  }
}

function buttonHandler() {
  localStorage.setItem("visited", JSON.stringify(true));
  this.hide();
}

export { HeaderComponent };
