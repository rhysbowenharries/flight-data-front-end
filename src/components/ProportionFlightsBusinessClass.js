import React, { Component } from "react";
import FlightDetail from "./FlightDetail"

class ProportionFlightsBusinessClass extends Component {
  render() {


      const flightsTotal = this.props.data.length
      const flightClassArray = this.props.data.map(flight => {
        const flightClass = flight.outflightclass
        return flightClass
      })

      let businessCount = 0;
      for(var i = 0; i < flightClassArray.length; ++i){
          if(flightClassArray[i] === "Business")
              businessCount++;
      }
      console.log('businessCount',businessCount);


      let businessPercent = Math.floor(businessCount*100/flightsTotal);
      console.log(businessPercent);


    return (
      <div className="ProportionFlighsBusiness">
        <h3>{businessPercent}%</h3>

      </div>
    )
  }
}

export default ProportionFlightsBusinessClass;
