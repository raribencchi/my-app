import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App"> 
    <div className='Container'>
    <h1>React Weather App </h1>
    <Weather defaultCity="Perth"/>
    <footer>
      This project is coded by <a href="https://ra-responsive-portfolio-v2.netlify.app"> Rashmi Aribenchi</a>  {"-"}
      <a href="https://github.com/raribencchi/my-app" target="blank"> Open-sourced on GitHub & hosted through Netlify.</a>

      </footer>
      </div>
    </div>
  );
}                                    
