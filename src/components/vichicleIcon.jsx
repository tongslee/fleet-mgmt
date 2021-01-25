import React, { Component } from 'react';
import Icon from '../assets/images/vichicle.png';
import Ups from '../assets/images/ups.png';

class VichicleIcon extends Component {
    state = {
        showVichicleData: false
    };
    handleIconClicked = () => {
        this.setState({showVichicleData: !this.state.showVichicleData});
    };
    render() { 
        const styleObj = {
            container: {
                width: '25px',
                height: '25px',
                color: 'lightgray',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${Ups})`,
                paddingTop: '50px',
                textAlign: 'left',
                paddingLeft: '30px'
            },
            toggleOn: {
                display: 'block',
                backgroundColor: 'black',
                color: 'lightgray'
            },
            toggleOff: {
                display: 'none'
            }
        }
        const vData = {...this.props.vichicleData};
        return (
            <React.Fragment>
                {/* <div style={(this.state.showVichicleData)? styleObj.toggleOn: styleObj.toggleOn}>
                    <div>Vichicle {vData.vichicleId}</div>
                    <div>{vData.batteryCurrentCapacityKWH} kWh / {vData.batteryTotalCapacityKWH} kWh</div>
                    <div>Battery Status: {vData.batteryCurrentCapacityPercentage}%</div>
                    <div>{vData.driverId}</div>
                </div>     */}
                <div style={styleObj.container} onClick={this.handleIconClicked}></div>
            </React.Fragment>
        );
    }
}
 
export default VichicleIcon;