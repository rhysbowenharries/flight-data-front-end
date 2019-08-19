import React, { Component } from "react";
import FlightDetail from "./FlightDetail"

class ProportionFlightsIntoSweden extends Component {
  render() {


      const flightsTotal = this.props.data.length
      console.log('flightsTotal', flightsTotal);
      const destairArray = this.props.data.map(flight => {
        const flightDestination = flight.destair
        return flightDestination
      })
      console.log('destairArray', destairArray);
      let sweedCount = 0;
      for(var i = 0; i < destairArray.length; ++i){
          if(destairArray[i] === "ARN" ||
            destairArray[i] === "GOT" ||
            destairArray[i] === "NYO" ||
            destairArray[i] === "BMA" ||
            destairArray[i] === "MMX" ||
            destairArray[i] === "LLA" ||
            destairArray[i] === "UME")
              sweedCount++;
      }
      console.log('sweedCount',sweedCount);


      let sweedPercent = sweedCount*100/flightsTotal;
      console.log(sweedPercent);


    return (
      <div className="ProportionFlighsSweeden">
        <h3>{sweedPercent}%</h3>

      </div>
    )
  }
}

export default ProportionFlightsIntoSweden ;
