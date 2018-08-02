import React, { Component } from "react";

import { Link } from "react-router-dom";

class HeaderLogo extends Component {
  render() {
    return (
      <Link to="/">
        <div className="header-logo">
          <div className="header-s">PARSEL</div>
        </div>
      </Link>
    );
  }
}

export default HeaderLogo;
