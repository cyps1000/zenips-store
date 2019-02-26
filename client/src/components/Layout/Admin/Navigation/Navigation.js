import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TopNav from "./TopNav/TopNav";
import SideNav from "./SideNav/SideNav";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      showSearch: false,
      search: ""
    };
  }

  toggleNav = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen
      };
    });
  };

  escapeRegex = text => {
    return text.replace(/[\s]/g, "+");
  };

  render() {
    return (
      <div>
        <TopNav toggleNav={this.toggleNav} />
        <SideNav toggleNav={this.toggleNav} isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default withRouter(Navigation);
