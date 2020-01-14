import React, { Component } from "react";
import "./App.css";
import storm from "./img/weather-icons/storm.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import fog from "./img/weather-icons/fog.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import Search from "./search";
import CurrentWeather from "./CurrentWeather";
import WeatherDetails from "./WeatherDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <navbar className="app__navbar">
          <Search text={this.value} />
        </navbar>
        <main className="app__main">
          <CurrentWeather
            image={storm}
            discription={"cloudy"}
            temperature={"6c"}
            humidity={"78%"}
            pressure={"1008.47"}
          />
          <div className="app__main__weather-list">
            <WeatherDetails time={"08:00"} images={mostlycloudy} temp={"8c"} />
            <WeatherDetails time={"08:00"} images={mostlycloudy} temp={"8c"} />
            <WeatherDetails time={"08:00"} images={mostlycloudy} temp={"8c"} />
            <WeatherDetails time={"08:00"} images={mostlycloudy} temp={"8c"} />
            <WeatherDetails time={"08:00"} images={mostlycloudy} temp={"8c"} />
            <WeatherDetails time={"08:00"} images={mostlycloudy} temp={"8c"} />
            <WeatherDetails time={"08:00"} images={mostlycloudy} temp={"8c"} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
