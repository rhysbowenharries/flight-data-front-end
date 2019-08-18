import React, { Component, Fragment } from "react";

class AverageJourneyTimeCalculator extends Component {
  render() {

    const arrayPrimitiveValueStartTimeIN = this.props.data.map(flight => {
      let formattedStartTime = flight.indepartdate + " " + flight.indeparttime
        let date = new Date(formattedStartTime)
        return date.valueOf()
      });

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const totalPrimativeValueStartTimeIN = arrayPrimitiveValueStartTimeIN.reduce(reducer)
    console.log("startTime", totalPrimativeValueStartTimeIN);

    const arrayPrimativeValueEndTimeIn = this.props.data.map(flight => {
      let formattedEndTime = flight.inarrivaldate + " " + flight.inarrivaltime
        let date = new Date(formattedEndTime)
        return date.valueOf()
      })

    const totalPrimativeValueEndTimeIN = arrayPrimativeValueEndTimeIn.reduce(reducer)
    console.log("endTime",totalPrimativeValueEndTimeIN);

    const totalEndTimeMinusSartTimePrimative = totalPrimativeValueEndTimeIN - totalPrimativeValueStartTimeIN
    console.log("end minus start", totalEndTimeMinusSartTimePrimative);

    const calculatedAveragePrimative = totalEndTimeMinusSartTimePrimative / 107
    console.log("divide my 107", calculatedAveragePrimative);

    function msToTime(duration) {
      var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;

      return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }

    let endResult = msToTime(calculatedAveragePrimative)


    console.log("reult", endResult);

    console.log('AverageJourneyTimeCalculator',this.props);


    return (

      <Fragment>
        <div className="AverageJourneyTimeCalculator">

          <h4>Average Journey From LHR to DXB</h4>
          <h3>{endResult}</h3>
        </div>
      </Fragment>
    );
  }
}

export default AverageJourneyTimeCalculator;
