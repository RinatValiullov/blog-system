class Component {
  constructor(id) {
    this.$el = document.querySelector(`#${id}`);
    this.init();
  }

  init() {}

  hide() {
    this.$el.classList.add("hide");
  }

  show() {
    this.$el.classList.remove("hide");
  }
}

export { Component };
