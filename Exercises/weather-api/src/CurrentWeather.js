import React, { Component } from "react";
import "./App.css";

class CurrentWeather extends Component {
  render() {
    return (
      <div className="app__main__weather">
        <img
          className="app__main__weather__image"
          src={this.props.image}
          alt="storm icon"
        />
        <div className="app__main__weather__description">
          {this.props.discription}
        </div>
        <div className="app__main__weather__Temperature">
          <b>Temperature</b> {this.props.temperature}
        </div>
        <div className="app__main__weather__details">
          <div className="app__main__weather__details__Humidity">
            <b>Humidity</b> {this.props.humidity}
          </div>
          <div className="app__main__weather__details__Pressure">
            <b>Pressure</b> {this.props.pressure}
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
