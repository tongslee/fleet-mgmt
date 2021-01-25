import React, { Component } from 'react';
import './App.css';
import FleetMap from './components/map';
import Vichicles from './components/vichicles';

class App extends Component {
  state = { 
    fleetData: [
      {
        vichicleId : 1,
        driverId: "john-doe-123",
        geoLocation: {
        latitude: 33.875779,
        longitude: -84.341928
        },
        batteryTotalCapacityKWH: 300,
        batteryCurrentCapacityKWH: 150,
        batteryCurrentCapacityPercentage: 50
      },
      {
        vichicleId : 2,
        driverId: "jane-done-563",
        geoLocation: {
        latitude: 33.29067485,
        longitude: -83.38971551
        },
        batteryTotalCapacityKWH: 300,
        batteryCurrentCapacityKWH: 150,
        batteryCurrentCapacityPercentage: 50
      },
      {
        vichicleId : 3,
        driverId: "randal-perry-543",
        geoLocation: {
        latitude: 34.57059737,
        longitude: -83.11572278
        },
        batteryTotalCapacityKWH: 300,
        batteryCurrentCapacityKWH: 150,
        batteryCurrentCapacityPercentage: 50
      },
      {
        vichicleId : 4,
        driverId: "christine-holland-756",
        geoLocation: {
        latitude: 34.47676545,
        longitude: -83.80517694
        },
        batteryTotalCapacityKWH: 300,
        batteryCurrentCapacityKWH: 150,
        batteryCurrentCapacityPercentage: 50
      },
      {
        vichicleId : 5,
        driverId: "ralph-palmer-713",
        geoLocation: {
        latitude: 34.06743958,
        longitude: -83.97321162
        },
        batteryTotalCapacityKWH: 300,
        batteryCurrentCapacityKWH: 150,
        batteryCurrentCapacityPercentage: 50
      },
    ],
    styleObj: {
      contentDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }
    }
  };
  render() { 
    return (
      <div className="App">
      <h1>
        Fleet Mgmt {this.state.fleetData.length}
      </h1>
      <div style={this.state.styleObj.contentDiv}>
        <Vichicles fleetData={this.state.fleetData} />
        <FleetMap fleetData={this.state.fleetData} />
      </div>
    </div>
    );
  }
}

export default App;
