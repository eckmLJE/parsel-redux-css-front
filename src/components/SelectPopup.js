import React, { Component } from "react";

class SelectPopup extends Component {
  render() {
    return (
      <div
        className="anno select-popup"
        style={{
          position: "absolute",
          top: `${this.props.pos.popupY}px`,
          left: `${this.props.pos.popupX}px`
        }}
      >
        <div className="select-header">New Annotation</div>
        <div className="select-input">
          <textarea rows="4" cols="30"/>
        </div>
        <div className="select-popup-submit"><button>Submit</button></div>
      </div>
    );
  }
}

export default SelectPopup;
