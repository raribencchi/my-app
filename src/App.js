import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather";
import bg2 from "./Videos/bg2.mp4";

export default function App() {
  return (
    <div className="App"> 
    <div className='Container'>
      <video className='bgVideo' autoPlay loop muted style={{
        position:'absolute',
        width:'100%',
        height:'100%',
        top:0,
        left:0,
        objectFit:'cover',
        overflow:"hidden",
        display:'flex',
        fontFamily:"sans-serif",
        zIndex:"-1"
      }} >
    <source src={bg2} type='video/mp4' />
      </video>

    <h1><strong>React Weather App</strong> </h1>
    <Weather defaultCity="Perth"/>
    <footer>
      This project is coded by <a href="https://ra-responsive-portfolio-v2.netlify.app"> Rashmi Aribenchi</a>  {" "}
      <a href="https://github.com/raribencchi/my-app" target="blank"> and open-sourced at GitHub </a>

      </footer>
      </div>
    </div>
  );
}                                    
