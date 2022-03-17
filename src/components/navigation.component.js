import { Component } from "../core/component";

class NavigationComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.$el.addEventListener("click", clickHandler.bind(this));
  }
}

function clickHandler(event) {
  event.preventDefault();
  if (event.target.classList.contains("tab")) {
    Array.from(this.$el.querySelectorAll(".tab")).forEach((tab) =>
      tab.classList.remove("active")
    );
    event.target.classList.add("active");
  }
}

export { NavigationComponent };
