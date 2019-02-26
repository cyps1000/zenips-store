// Dependencies
import React from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// Actions
import { logoutUser, clearErrors } from "../../../actions/auth";
// Components
import AdminRoute from "../../Utils/AdminRoute";
import Dashboard from "../../Private/Dashboard";
import Navigation from "../../Layout/Admin/Navigation/Navigation";

class PrivateLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div>
        <Navigation isOpen={this.state.isOpen} />
        <Switch>
          <AdminRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

PrivateLayout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearErrors }
)(PrivateLayout);
