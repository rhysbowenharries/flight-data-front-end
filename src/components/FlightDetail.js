import React, { Component, Fragment } from "react";

class FlightDetail extends Component {
  render() {
  
    return (
      <Fragment>
        <div className="flightDetail">

          <h4>{this.props.author}</h4>
          <h3>{this.props.children}</h3>
        </div>
      </Fragment>
    );
  }
}

export default FlightDetail;
