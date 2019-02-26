import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../Public/Home/Home";
import Register from "../../Public/Auth/Register";
import Login from "../../Public/Auth/Login";
import Navigation from "../../Layout/Client/Navigation/Navigation";
// CSS
import "mdbreact/dist/css/mdb.css";

class ClientLayout extends React.Component {
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
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default ClientLayout;
