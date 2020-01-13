import React, { Component } from "react";
import "./App.css";
import storm from "./img/weather-icons/storm.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import fog from "./img/weather-icons/fog.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import Search from "./search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <navbar className = "app__navbar">
            <Search text="hello"/>
            <button className="app__navbar__button">Find Weather</button>
        </navbar>
        <main className="app__main">
          <div className="app__main__weather">
            <img className="app__main__weather__image" src={storm} alt="storm icon"/>
            <div className="app__main__weather__description">overcast clouds</div>
            <div className="app__main__weather__Temperature"><b>Temperature</b> 10 to 11°C</div>
            <div className="app__main__weather__details">
              <div className="app__main__weather__details__Humidity"><b>Humidity</b> 78%</div>
              <div className="app__main__weather__details__Pressure"><b>Pressure</b> 1008.48</div>
            </div>
          </div>
          <div className="app__main__weather-list">
            <div className="app__main__weather-list__weather-element">
              <div>03:00</div>
              <img src={mostlycloudy} alt="storm icon"/>
              <div>8°C</div>
            </div>
            <div className="app__main__weather-list__weather-element">
              <div>06:00</div>
              <img src={cloudy} alt="storm icon"/>
              <div>9°C</div>
            </div>
            <div className="app__main__weather-list__weather-element">
              <div>09:00</div>
              <img src={storm} alt="storm icon"/>
              <div>14°C</div>
            </div>
            <div className="app__main__weather-list__weather-element">
              <div>12:00</div>
              <img src={fog} alt="storm icon"/>
              <div>17°C</div>
            </div>
            <div className="app__main__weather-list__weather-element">
              <div>15:00</div>
              <img src={partlycloudy} alt="storm icon"/>
              <div>18°C</div>
            </div>
            <div className="app__main__weather-list__weather-element">
              <div>18:00</div>
              <img src={mostlycloudy} alt="storm icon"/>
              <div>16°C</div>
            </div>
            <div className="app__main__weather-list__weather-element">
              <div>21:00</div>
              <img src={storm} alt="storm icon"/>
              <div>13°C</div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;