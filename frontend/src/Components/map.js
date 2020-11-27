import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


const style = {
    width: '58.65%',
    height: '550px'
}



export class MapContainer extends Component {
    onMarkerClick = (item, data) => {
        data = item.id
        this.props.SetSelectedCharger(item)
    }


    render() {
        return (
            <Map google={this.props.google}
                style={style}
                initialCenter={{
                    lat: 65.012093,
                    lng: 25.465076
                }}
                zoom={5}>





            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.key)
})(MapContainer)