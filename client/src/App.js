// Dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import "./App.css";

// Actions
import { setCurrentUser, logoutUser } from "./actions/auth";

// Utilities
import setAuthToken from "./utils/setAuthToken";

// Store
import store from "./store";
import AsyncComponent from "./components/Utils/AsyncComponent";
// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);

  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set User and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout User
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    const AdminLayout = AsyncComponent(() =>
      import("./components/Layout/Admin/AdminLayout")
    );
    const ClientLayout = AsyncComponent(() =>
      import("./components/Layout/Client/ClientLayout")
    );

    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route path="/dashboard" component={AdminLayout} />
              <Route path="/" component={ClientLayout} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
