import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import InputGroup from "../../../../Utils/Form/InputGroup";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu } from "mdbreact";
// Actions
import {
  loginUser,
  clearErrors,
  logoutUser
} from "../../../../../actions/auth";

class NavRight extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  static getDerivedStateFromProps(nextProps) {
    if (nextProps.errors) {
      return { errors: nextProps.errors };
    } else return null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState(() => ({ errors: this.props.errors }));
    }
  }

  changeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitLoginForm = event => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
    this.props.clearErrors();
    setTimeout(
      () =>
        this.setState({
          email: "",
          password: ""
        }),
      1500
    );
  };

  render() {
    const { error } = this.state.errors;
    const { isAuthenticated, isAdmin, user } = this.props.auth;
    let menu, menu_dropdown, hidden;

    if (isAuthenticated) {
      if (isAdmin) {
        hidden = (
          <div className="user-nav-item">
            <Link to="/" className="shopping-cart-box">
              <span style={{ color: "red" }}> Home </span>
            </Link>
          </div>
        );
      }
      menu = (
        <MDBDropdownToggle nav>
          <div className="user-nav">
            <img
              className="user-avatar"
              width="25px"
              src={user.avatar}
              alt="user avatar"
            />
            <div className="flx">
              <span className="m-r-5 m-t-2">
                {user.firstName} {user.lastName}
              </span>
              <i className="fas fa-caret-down" />
            </div>
          </div>
        </MDBDropdownToggle>
      );
      menu_dropdown = (
        <div className="user-nav-box">
          {hidden}
          <div className="user-nav-item">
            <span>Wishlist</span>
          </div>
          <div className="user-nav-item">
            <span>Orders</span>
          </div>
          <div className="user-nav-item">
            <span>Notifcations</span>
          </div>
          <div className="user-nav-item">
            <span>Profile</span>
          </div>
          <div className="user-nav-item">
            <span>History</span>
          </div>
          <div className="user-nav-item">
            <span onClick={() => this.props.logoutUser()}>Logout</span>
          </div>
        </div>
      );
    } else {
      menu = (
        <MDBDropdownToggle caret nav>
          <i className="fas fa-user" /> Account
        </MDBDropdownToggle>
      );
      menu_dropdown = (
        <div className="login-form-container">
          <form autoComplete="false">
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
            <div className="text-center">
              <button
                className="btn btn-primary"
                onClick={e => this.onSubmitLoginForm(e)}
              >
                Login
              </button>
              <Link to="/register" className="btn btn-danger">
                Register
              </Link>
            </div>
          </form>
        </div>
      );
    }
    return (
      <div className="toolbar-nav-items">
        <ul>
          <li>
            <MDBDropdown>
              {menu}
              <MDBDropdownMenu
                className="dropdown-default message-box-container"
                right
              >
                {menu_dropdown}
              </MDBDropdownMenu>
            </MDBDropdown>
          </li>
        </ul>
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
  { loginUser, clearErrors, logoutUser }
)(NavRight);
