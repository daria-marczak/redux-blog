import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) { // field contains some event handlers
    return (
      <div className="form-group">
      <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        /> {/* Object that contains those handlers */}
        
      </div>
    )
  };

  render() {
    return (
      <form>
        <Field 
          label="Title"
          name="title"
          component={this.renderField} // Add in a function that will return some JSX used to show this field component on the screen
        />
        <Field 
          label="Categories"        
          name="categories"
          component={this.renderField}
        />
        <Field 
          label="Posts content"        
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
};

function validate() {
  const errors = {};
  // Validate the inputs from "values" object
  // If errors is empty, the form is fine to submit
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters";
  };

  if (!values.categories) {
    errors.categories = "Enter some categories";
  };

  if (!values.content) {
    errors.title = "Please enter some content";
  };

  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(PostsNew);

// reduxForm is kind of like connect in terms of syntax
// It is actually making a form that then transfers the data to the state