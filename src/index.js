import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DesktopApp, MobileApp } from "./App";
import { textBlack, textWhite } from "./content";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dark: localStorage.getItem("dark"), desktop: window.matchMedia("(min-width: 768px)").matches };
  }
  componentDidMount() {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => this.setState({ desktop: e.matches }));
    if (this.state.dark === "true") {
      document.querySelector("#preloader").style.backgroundColor = textBlack;
      document.body.style.backgroundColor = textBlack;
      document.body.style.color = textWhite;
      let blackholes = document.body.querySelectorAll(".blackhole");
      for (let i=0;i<blackholes.length;i++){
        blackholes[i].style.setProperty("--blackhole-color",textWhite);
        blackholes[i].style.setProperty("--blackhole-color-2", textBlack);
      }
    } else {
      document.querySelector("#preloader").style.backgroundColor = textWhite;
      document.body.style.backgroundColor = textWhite;
      document.body.style.color = textBlack;
      let blackholes = document.body.querySelectorAll(".blackhole");
      for (let i = 0; i < blackholes.length; i++) {
        blackholes[i].style.setProperty("--blackhole-color", textBlack);
        blackholes[i].style.setProperty("--blackhole-color-2", textWhite);
      }
    }
  }
  render() {
    return <React.Fragment>{this.state.desktop ? <DesktopApp /> : <MobileApp />}</React.Fragment>;
  }
}

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
