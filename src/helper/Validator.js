class Validator {
  constructor(data) {
    this.data = data;
    this.errors = [];
  }

  static make(data) {
    return new Validator(data);
  }

  required(field) {
    if (!this.data[field]) {
      this.errors.push(`${field} is required.`);
    }
    return this;
  }

  regex(field, pattern, errorMessage) {
    const regex = new RegExp(pattern);
    if (!regex.test(this.data[field])) {
      this.errors.push(errorMessage);
    }
    return this;
  }

  // Add more validation methods as needed

  passes() {
    return this.errors.length === 0;
  }

  fails() {
    return !this.passes();
  }

  getErrors() {
    return this.errors;
  }
}

module.exports = Validator;
