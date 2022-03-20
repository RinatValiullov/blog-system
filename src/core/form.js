class Form {
  constructor(form, controls) {
    this.form = form;
    this.controls = controls;
  }

  getValue() {
    const value = {};

    Object.keys(this.controls).forEach((control) => {
      value[control] = this.form[control].value;
    });

    return value;
  }
}

export { Form };
