import React, { Component, Fragment } from 'react';
import FlightList from '../components/FlightList.js'
import AverageJourneyTimeCalculator from '../components/AverageJourneyTimeCalculator'
import ManchesterBusyestDay from '../components/ManchesterBusyestDay'
import ProportionFlightsBusinessClass from '../components/ProportionFlightsBusinessClass'
import ProportionFlightsIntoSweden  from '../components/ProportionFlightsIntoSweden'

class FlightDataContainer extends React.Component {

  constructor(props){
      super(props);

console.log('This happens 1st.');

      this.state = {
        loading: 'initial',
        flights: [],
        flightsLHRtoDXB: [],
        flightsMAN: []
      };
  }



  componentDidMount() {
    const url = 'http://localhost:8080/flights/all';
    const urlLHRtoDXB = 'http://localhost:8080/flights/from/LHR/to/DXB'
    const urlMAN = 'http://localhost:8080/flights/from/MAN'

      console.log('This happens 3rd.');

      this.setState({ loading: 'true' });
      fetch(urlLHRtoDXB)
        .then(res => res.json())
        .then((flightsLHRtoDXB) => {
        console.log('This happens LATERth.');
        this.setState({flightsLHRtoDXB: flightsLHRtoDXB,})
      })
      .catch(err => console.error);

      this.setState({ loading: 'true' });
      fetch(urlMAN)
        .then(res => res.json())
        .then((flightsMAN) => {
        console.log('This happens LATERth.');
        this.setState({flightsMAN: flightsMAN,})
      })
      .catch(err => console.error);


      fetch(url)
        .then(res => res.json())
        .then((flights) => {
        console.log('This happens 7th.');
        this.setState({flights: flights,loading: 'false'})
      })
      .catch(err => console.error);



  }


  render(){


    if (this.state.loading === 'initial') {
      console.log('This happens 2nd - after the class is constructed. You will not see this element because React is still computing changes to the DOM.');
      return <h2>Intializing...</h2>;
    }

    if (this.state.loading === 'true') {
      console.log('This happens 5th - when waiting for data.');
      return <h2>Loading...</h2>;
    }

    return (
      <Fragment>
        <div>
          <h1>Flight Data Stats</h1>
        </div>
        <div>
          <h2>flights LHR to DXB</h2>
          <AverageJourneyTimeCalculator data={this.state.flightsLHRtoDXB}/>
        </div>
        <div>
          <h2>Manchester's Busiest Departure Day</h2>
          <ManchesterBusyestDay data={this.state.flightsMAN}/>
        </div>
        <div>
          <h2>Proportion of flights Business Class</h2>
          <ProportionFlightsBusinessClass data={this.state.flights}/>
        </div>
        <div>
          <h2>Proportion ofFlights in to Sweden</h2>
          <ProportionFlightsIntoSweden data={this.state.flights}/>
        </div>
      </Fragment>
    );
  }

}

export default FlightDataContainer
