import React, { Component } from "react";
class CustomButton extends Component {
  state = {
    mouseover: false,
    click: false
  };
  click = (x) => {
    this.setState({ click: !this.state.click });
    alert("clicked warning");
  };
  mouseover = (x) => {
    this.setState({ mouseover: !this.state.mouseover });

    console.log(true);
  };

  render() {
    return (
      <div>
        <button
          onClick={this.click}
          style={
            this.props.name === "Warning" && this.state.click
              ? { background: "red " }
              : { background: "transparent " }
          }
        >
          {this.props.name}
        </button>
        <button
          onMouseOver={this.mouseover}
          style={{
            fontStyle: this.state.mouseover && "italic",
            fontWeight: this.state.mouseover || "bold"
          }}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}
export default CustomButton;
