import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
  return (
    <div className="App">
    <Header data={this.state.resumeData.main} />
    <Resume data={this.state.resumeData.resume} />
    <Portfolio data={this.state.resumeData.portfolio} />
    <Contact data={this.state.resumeData.main} />
    <Footer data={this.state.resumeData.main} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer data={this.state.resumeData.main} />
    </div>
  );
}
}
export default App;
