import React, { Component } from "react";
import "./App.css";

class search extends Component {
  state = {
    input: ""
  };

  render() {
    return (
      <>
        <input
          className="app__navbar__input"
          type="text"
          placeholder="Type in a city name"
          onChange={event => {
            this.setState({ input: event.target.value });
          }}
        />
        <button
          className="app__navbar__button"
          onClick={event => {
            this.props.inputChange(this.state.input, event);
          }}
        >
          Find Weather
        </button>
      </>
    );
  }
}

export default search;
