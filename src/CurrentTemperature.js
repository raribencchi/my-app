import React, { useState } from "react";


export default function CurrentTemperature(props) {
    const [unit, setunit]=useState("celsius");
    
    function showCelsius(event) {
        event.preventDefault();
        setunit("celsius");
    }
    
 if (unit==="celsius") 

      return (
          <div className="CurrentTemperature">
           <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="unit">°C {" "} <a href="/" onClick={showCelsius}>
              </a></span>
          </div>
        );       
  }
 
