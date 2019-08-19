import React, { Component } from "react";
import FlightDetail from "./FlightDetail"

class ManchesterBusyestDay extends Component {
  render() {

    const departureDayIndexed = this.props.data.map(flight => {
      let departDate = flight.indepartdate
      let date = new Date(departDate)
      let depDateIndex =  date.getDay()
      return depDateIndex
    })

    function busiestDayCalucator(indexedDays) {
      if(indexedDays.length === 0)
      return null;
      var modeMap = {};
      var maxEl = indexedDays[0], maxCount = 1;
      for(var i = 0; i < indexedDays.length; i++)
      {
        var el = indexedDays[i];
        if(modeMap[el] == null)
        modeMap[el] = 1;
        else
        modeMap[el]++;
        if(modeMap[el] > maxCount)
        {
          maxEl = el;
          maxCount = modeMap[el];
        }
      }
      return maxEl;
    }

  const manchestersBusiestDay = busiestDayCalucator(departureDayIndexed)
  console.log("busiest day index", manchestersBusiestDay);
  let weekday = [];
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    const result = weekday[manchestersBusiestDay];

console.log(this.props.data.map(flight => {
  let departDate = flight.indepartdate
  let date = new Date(departDate)
  let depDateIndex =  date.getDay()
  return depDateIndex
}))



    return (
      <div className="ManchesterBusyestDay">
      <h3>{result}</h3>

      </div>
    )
  }
}

export default ManchesterBusyestDay;
