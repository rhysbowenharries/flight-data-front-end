import React, { Component } from "react";
import FlightDetail from "./FlightDetail"

class FlightList extends Component {
  render() {


      const flightNodes = this.props.data.flights.map(flight => {
          return (
            <FlightDetail key={flight.id} author={flight.outdepartdate}>
             {flight.depair}-
             {flight.destair}
             <p> </p>
            </FlightDetail>
          );
        });

    return (
      <div className="flight-list">
          
            {flightNodes}
      </div>
    )
  }
}

export default FlightList;
