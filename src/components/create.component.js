import { Component } from "../core/component";
import { Form } from "./../core/form";

class CreateComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.$el.addEventListener("submit", submitHandler.bind(this));

    this.form = new Form(this.$el, {
      title: [],
      fulltext: []
    });
  }
}

function submitHandler(event) {
  event.preventDefault();

  const formData = {
    type: this.$el.type.value,
    ...this.form.getValue()
  };

  console.log(formData);
}

export { CreateComponent };
