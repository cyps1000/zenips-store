import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser, clearErrors } from "../../../actions/auth";
import InputGroup from "../../Utils/Form/InputGroup";
import "./Auth.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      password_confirm: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    this.props.clearErrors();
    document.title = "Zenips Store - Register";
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.errors) {
      return { errors: nextProps.errors };
    } else return null;
  }

  componentDidUpdate(prevProps) {
    const isAuthenticated = this.props.auth.isAuthenticated;

    if (prevProps.errors !== this.props.errors) {
      this.setState(() => ({ errors: this.props.errors }));
    }

    if (isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  changeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitRegisterForm = event => {
    event.preventDefault(); // Don't refresh the page upon submit
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password_confirm: this.state.password_confirm
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { error } = this.state.errors;
    return (
      <div className="wrapper">
        <h1>Register Page</h1>
        <div className="container">
          <form id="Login" onSubmit={this.onSubmitRegisterForm}>
            <InputGroup
              placeholder="First Name"
              name="firstName"
              type="text"
              value={this.state.firstName}
              icon="far fa-id-card"
              onChange={this.changeInput}
              error={error.firstName}
            />
            <InputGroup
              placeholder="Last Name"
              name="lastName"
              type="text"
              value={this.state.lastName}
              icon="far fa-id-card"
              onChange={this.changeInput}
              error={error.lastName}
            />
            <InputGroup
              placeholder="Email Address"
              name="email"
              type="email"
              value={this.state.email}
              icon="far fa-envelope"
              onChange={this.changeInput}
              error={error.email || error.error_message}
            />
            <InputGroup
              placeholder="Password"
              name="password"
              icon="fas fa-lock"
              type="password"
              value={this.state.password}
              onChange={this.changeInput}
              error={error.password || error.error_message}
            />
            <InputGroup
              placeholder="Confirm Password"
              name="password_confirm"
              icon="fas fa-check-double"
              type="password"
              value={this.state.password_confirm}
              onChange={this.changeInput}
              error={error.password_confirm}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser, clearErrors }
)(Register);
