import React, { Component } from "react";
import InputGroup from "../../../../Utils/Form/InputGroup";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  changeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="toolbar-nav-items search-box">
        <InputGroup
          placeholder="Search for products"
          name="search"
          type="text"
          isSearch={true}
          value={this.state.search}
          icon="fas fa-search"
          onChange={this.changeInput}
        />
      </div>
    );
  }
}

export default Search;
