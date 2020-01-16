import React, { Component } from "react";
import "./App.css";
import storm from "./img/weather-icons/storm.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import fog from "./img/weather-icons/fog.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import clear from "./img/weather-icons/clear.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import Search from "./search";
import CurrentWeather from "./CurrentWeather";
import WeatherDetails from "./WeatherDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      city: "Beirut"
    };
  }

  roundC = c => {
    return Math.round(c);
  };

  getTime = fullTime => {
    const array = fullTime.split(" ");
    const newArray = array[1].split(":");
    return `${newArray[0]}:${newArray[1]}`;
  };

  inputChange = (value, e) => {
    e.preventDefault();

    this.getData(value);
  };

  getData(value) {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
        `${value}` +
        "&cnt=8&units=metric&appid=ef5ed89a3b96d5b3a9acbe0377ceb023"
    )
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(data => {
        this.setState({ todos: data });
        //console.log(this.state.todos.list[0].weather[0].description)
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getData(this.state.city);
  }

  imagesChecker = id => {
    if (id < 300) {
      return storm;
    } else if (id >= 300 && id <= 499) {
      return drizzle;
    } else if (id >= 500 && id <= 599) {
      return rain;
    } else if (id >= 600 && id <= 699) {
      return snow;
    } else if (id >= 700 && id <= 799) {
      return fog;
    } else if (id === 800) {
      return clear;
    } else if (id === 801) {
      return partlycloudy;
    } else if (id > 801 && id <= 805) {
      return mostlycloudy;
    }
  };

  render() {
    if (this.state.todos.length === 0) {
      return <div></div>;
    } else {
      return (
        <div className="app">
          <navbar className="app__navbar">
            <Search inputChange={this.inputChange} />
          </navbar>
          <main className="app__main">
            <CurrentWeather
              image={this.imagesChecker(this.state.todos.list[0].weather[0].id)}
              discription={this.state.todos.list[0].weather[0].description}
              temperatureMin={this.roundC(
                this.state.todos.list[0].main.temp_min
              )}
              temperatureMax={this.roundC(
                this.state.todos.list[0].main.temp_max
              )}
              humidity={this.state.todos.list[0].main.humidity}
              pressure={this.state.todos.list[0].main.pressure}
            />

            <div className="app__main__weather-list">
              {this.state.todos.list.map((element, index) => {
                index++;
                if (index <= 8) {
                  return (
                    <WeatherDetails
                      key={index}
                      time={this.getTime(element.dt_txt)}
                      temp={this.roundC(element.main.temp)}
                      images={this.imagesChecker(element.weather[0].id)}
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
}

export default App;
