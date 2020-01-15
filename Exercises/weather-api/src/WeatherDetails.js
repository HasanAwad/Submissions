import React, { Component } from "react";
import "./App.css";

class WeatherDetails extends Component {
  render() {
    return (
      <div className="app__main__weather-list__weather-element">
        <div>{this.props.time}</div>
        <img src={this.props.images} alt="storm icon" />
        <div>{this.props.temp}°C</div>
      </div>
    );
  }
}

export default WeatherDetails;
