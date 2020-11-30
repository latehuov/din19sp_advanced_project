import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


const style = {
    width: '58.65%',
    height: '550px'
}



export class MapContainer extends Component {
    onMarkerClick = (item) => {
        this.props.setSelectedRestaurant(item)
        console.log(this.props.selectedRestaurant)
    }


    render() {
        return (
            <Map google={this.props.google}
                style={style}
                initialCenter={{
                    lat: 65.012093,
                    lng: 25.465076
                }}
                zoom={12}>


                {
                    this.props.data.map(item => <Marker onClick={() => this.onMarkerClick(item)} 
                        position={{ lat: item.lat, lng: item.lng }}
                        key={item.id_restaurant} title={item.name_res} {...item} />)
                }



            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.key)
})(MapContainer)