"use strict";

import React from "react";

class CircleBox extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    circleStyles.padding = this.props.circleSize;
    return (
      <div style={containerStyles}>
        <div>
          {this.props.topLabel}
        </div>
        <div style={circleStyles}>
          <span style={circleCounterStyles}>
            {this.props.value}
          </span>
        </div>
        <div>
          {this.props.bottomLabel}
        </div>
      </div>
    );
  }
}
CircleBox.defaultProps = {
  topLabel: null,
  bottomLabel: null,
  value: 3,
  circleSize: "30px"
};
CircleBox.propTypes = {
  circleSize: React.PropTypes.string,
  topLabel: React.PropTypes.string,
  bottomLabel: React.PropTypes.string,
  value: React.PropTypes.number.isRequired
};
const containerStyles = {
  display: "inline-block",
  textAlign: "center"
};
const circleCounterStyles = {
  position: "absolute",
  left: 0,
  right: 0,
  margin: "0 auto",
  top: "32%"
};
const circleStyles = {
  padding: "20px",
  backgroundColor: "#FFA500",
  position: "relative",
  WebkitBorderRadius: "50%",
  MozBorderRadius: "50%",
  borderRadius: "50%",
  display: "inline-block",
  color: "#FFFFFF"
};
export default CircleBox;
