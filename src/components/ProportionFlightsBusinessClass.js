import React, { Component } from "react";
import FlightDetail from "./FlightDetail"

class ProportionFlightsBusinessClass extends Component {
  render() {


      const flightsTotal = this.props.data.page.totalElements
      console.log('Flights total',flightsTotal);
      console.log('data',this.props.data);





    return (
      <div className="ProportionFlighsBusiness">


      </div>
    )
  }
}

export default ProportionFlightsBusinessClass;
// (flight => {
//     const total = flight.length()
//     console.log(total);
//   });
