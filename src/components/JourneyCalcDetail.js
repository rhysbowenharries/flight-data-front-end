import React, { Component, Fragment } from "react";

class JourneyCalcDetail extends Component {
  render() {

    return (
      <Fragment>
        <div className="JourneyCalcDetail">

          <h4>{this.props.author}</h4>
          <h3>{this.props.children}</h3>
        </div>
      </Fragment>
    );
  }
}

export default JourneyCalcDetail;
