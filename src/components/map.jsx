import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import VichicleIcon from './vichicleIcon';

class FleetMap extends Component {
    render() { 
        const defaultProp = {
            key: "AIzaSyDXgry5P-mUlVd9Bunsz9kZQa1PV5YXnuc",
            center: {lat: 33.871545901407195, lng: -84.33611896596383},
            zoom: 8
        }
        const mapContainerSytle = {
            width: '100%',
            height: '100vh'
        }
        console.log('tsl: ', defaultProp);
        return (
            <div style={mapContainerSytle}>
                <GoogleMap
                    bootstrapURLKeys={{key: defaultProp.key}}
                    defaultCenter={defaultProp.center}
                    defaultZoom={defaultProp.zoom}
                    yesIWantToUseGoogleMapApiInternals={true}

                >
                    {this.props.fleetData.map(vichicleData => {
                        const displayTxt = 'Vichicle ' + vichicleData.vichicleId + ' ' + vichicleData.batteryCurrentCapacityPercentage + '% (' + vichicleData.batteryCurrentCapacityKWH + '/' + vichicleData.batteryTotalCapacityKWH + ')';
                        return (
                            <VichicleIcon
                                key={vichicleData.vichicleId}
                                lat={vichicleData.geoLocation.latitude}
                                lng={vichicleData.geoLocation.longitude}
                                vichicleData={vichicleData}
                            />
                        )
                    })}
                </GoogleMap>
            </div>
        );
    }
}
 
export default FleetMap;