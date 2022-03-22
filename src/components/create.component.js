import { Component } from "../core/component";
import { Form } from "./../core/form";
import { Validators } from "./../core/validators";
import { apiService } from "./../services/api.service";

class CreateComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.$el.addEventListener("submit", submitHandler.bind(this));

    this.form = new Form(this.$el, {
      title: [Validators.required],
      fulltext: [Validators.required, Validators.minLength(10)]
    });
  }
}

async function submitHandler(event) {
  event.preventDefault();

  if (this.form.isValid()) {
    const formData = {
      type: this.$el.type.value,
      date: new Date().toLocaleDateString("ru-RU"),
      ...this.form.getValue()
    };

    await apiService.createPost(formData);

    this.form.clear();

    alert("The entry was created in the database");
  }
}

export { CreateComponent };
