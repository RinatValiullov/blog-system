import { Component } from "../core/component";

class HeaderComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    const btn = this.$el.querySelector("button");
    btn.addEventListener("click", buttonHandler.bind(this));
  }
}

function buttonHandler() {
  this.hide();
}

export { HeaderComponent };
