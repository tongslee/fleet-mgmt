import React, { Component } from 'react';
import VichicleDetail from './vichicleDetail';

class Vichicles extends Component {
    render() { 
        const styleObj = {
            containerDiv: {
                minWidth: '300px',
                textAlign: 'left'
            }
        }
        return (
            <div style={styleObj.containerDiv}>
                <h2>Vichicles - {this.props.fleetData.length}</h2>
                <ul>
                    {this.props.fleetData.map((detail) => {
                        return <VichicleDetail key={detail.vichicleId} vichicleData={detail} />
                    })}
                </ul>
            </div>
        ); 
    }
}
export default Vichicles;