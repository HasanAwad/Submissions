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
import FakeWeather from "./data/FakeWeather.json";

const current_Weather_Data = FakeWeather.list[0];
const weatherData = FakeWeather.list;
const KEY = "ef5ed89a3b96d5b3a9acbe0377ceb023";
const API_LINK = "http://api.openweathermap.org/data/2.5/forecast?q=";
const KEY_LINK = "&cnt=8&units=metric&appid="`${KEY}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  kToc = k => {
    return Math.round(parseFloat(k - 273.15));
  };

  getTime = fullTime => {
    const array = fullTime.split(" ");
    const newArray = array[1].split(":");
    return `${newArray[0]}:${newArray[1]}`;
  };

  render() {
    return (
      <div className="app">
        <navbar className="app__navbar">
          <Search text={this.value} />
        </navbar>
        <main className="app__main">
          <CurrentWeather
            image={storm}
            discription={current_Weather_Data.weather[0].description}
            temperatureMin={this.kToc(current_Weather_Data.main.temp_min)}
            temperatureMax={this.kToc(current_Weather_Data.main.temp_max)}
            humidity={current_Weather_Data.main.humidity}
            pressure={current_Weather_Data.main.pressure}
          />
          <div className="app__main__weather-list">
            {weatherData.map((element, index) => {
              index++;
              if (index <= 8) {
                return (
                  <WeatherDetails
                    time={this.getTime(element.dt_txt)}
                    temp={this.kToc(element.main.temp)}
                    images={storm}
                  />
                );
              }
            }, 1)}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
