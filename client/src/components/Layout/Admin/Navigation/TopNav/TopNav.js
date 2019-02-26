import React from "react";
// Components
import ToggleButton from "../SideNav/ToggleButton";
import Brand from "./Brand";
import NavRight from "./NavRight";
import NavMid from "./NavMid";
// CSS
import "./TopNav.css";

class TopNav extends React.Component {
  render() {
    const { toggleNav } = this.props;
    return (
      <header className="toolbar">
        <nav className="toolbar-nav">
          <Brand />
          <ToggleButton toggleNav={toggleNav} />
          <div className="spacer" />
          <NavMid />
          <div className="spacer" />
          <NavRight />
        </nav>
      </header>
    );
  }
}

export default TopNav;
