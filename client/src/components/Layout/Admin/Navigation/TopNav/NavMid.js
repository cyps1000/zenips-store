import React from "react";
import { Link } from "react-router-dom";

const NavMid = () => {
  return (
    <div className="toolbar-nav-items">
      <ul>
        <li>
          <Link to="/reviews">
            <i className="far fa-list-alt" /> Products
          </Link>
        </li>
        <li>
          <Link to="/guides">
            <i className="fas fa-warehouse" /> Inventory
          </Link>
        </li>
        <li>
          <Link to="/guides">
            <i className="fas fa-inbox" /> Inbox
          </Link>
        </li>
        <li>
          <Link to="/guides">
            <i className="fas fa-archive" /> Archive
          </Link>
        </li>
        <li>
          <Link to="/guides">
            <i className="fas fa-shipping-fast" /> Orders
          </Link>
        </li>
        <li>
          <Link to="/guides">
            <i className="fas fa-bell" /> Specials
          </Link>
        </li>
        <li>
          <Link to="/guides">
            <i className="fas fa-users" /> Team
          </Link>
        </li>
        <li>
          <Link to="/guides">
            <i className="fas fa-chart-pie" /> Analytics
          </Link>
        </li>
        <li>
          <Link to="/guides">
            <i className="fas fa-cogs" /> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavMid;
