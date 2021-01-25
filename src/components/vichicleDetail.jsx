import React, { Component } from 'react';

class VichicleDetail extends Component {
    render() { 
        const { vichicleId, driverId, geoLocation, batteryTotalCapacityKWH, batteryCurrentCapacityKWH, batteryCurrentCapacityPercentage} = this.props.vichicleData;
        return (
            <React.Fragment>
                <h3>Vichicle - {vichicleId}</h3>
                <div>Driver Id: {driverId}</div>
                <div>Battery Status: {batteryCurrentCapacityPercentage}%</div>
                <div>{batteryCurrentCapacityKWH}/{batteryTotalCapacityKWH}</div>
                <div>Lat: {geoLocation.latitude}</div>
                <div>Long: {geoLocation.longitude}</div>
            </React.Fragment>
        );
    }
}
 
export default VichicleDetail;