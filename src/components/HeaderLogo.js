import React, { Component } from "react";

import { Link } from "react-router-dom";

class HeaderLogo extends Component {
  render() {
    return (
      <Link to="/">
        <img
          className="header-logo"
          alt=""
          src="https://i.imgur.com/hPh3zTn.png"
        />
      </Link>
    );
  }
}

export default HeaderLogo;
