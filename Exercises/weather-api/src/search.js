import React, { Component } from "react";
import "./App.css";

class search extends Component{

    render() {

        return (
        <input className="app__navbar__input" type="text" placeholder="Type in a city name" value={this.props.text}/>

        );
    }


}

export default search;