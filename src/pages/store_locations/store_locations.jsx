import React from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


export class store_locations extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stores: [{ location: { lat: 6.917619, lng: 79.861099 }, add: "2, 69 Hyde Park Corner, Colombo 00200", Tel: "+94112683949", img: "https://firebasestorage.googleapis.com/v0/b/hciapp-7355d.appspot.com/o/a4.jpg?alt=media&token=95387043-6947-4cc0-b737-31d0d9518856" },
            { location: { lat: 7.002230, lng: 79.949216 }, add: "172/6 Kandy Rd, Kadawatha", Tel: "+94114643615", img: "https://firebasestorage.googleapis.com/v0/b/hciapp-7355d.appspot.com/o/a1.jpg?alt=media&token=2317e5ae-7cc8-4d7d-8440-15abfd97eea6" },
            { location: { lat: 7.253100, lng: 80.341303 }, add: "No 64/2 Colombo - Kandy Rd, Kegalle 71000", Tel: "+94352221833", img: "https://firebasestorage.googleapis.com/v0/b/hciapp-7355d.appspot.com/o/a2.jpg?alt=media&token=62cb6128-ed01-42af-9057-1a937fb93303" },
            { location: { lat: 7.216848, lng: 80.597277 }, add: "Kandy Rd, Gelioya 20620", Tel: "+94112464646", img: "https://firebasestorage.googleapis.com/v0/b/hciapp-7355d.appspot.com/o/a3.jpg?alt=media&token=5555e6a8-d597-4d01-951f-ca960cd38203" }],
            Add: "dsf",
            Tell: "dfsdf",
            img: "http://lorempixel.com/270/200/food/"
        }
    }

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker
                key={index}
                id={index}
                position={{
                    lat: store.location.lat,
                    lng: store.location.lng
                }}
                onClick={() => this.getMakerData(index)}
                name={'Kenyatta International Convention Centre'}>

            </Marker>
        })
    }

    getMakerData(index) {
        this.setState({
            Add: this.state.stores[index].add,
            Tell: this.state.stores[index].Tel,
            img: this.state.stores[index].img
        });
    }

    render() {
        return (
            <div>
                <div id="breadcom">
                    <a id="breadcomText" href="/home">Home</a> /
                <a id="breadcomText" href="/store_locations">Store Locations</a>
                </div>
                <div id="map_headline">
                    <h1 id="map_h1">Store Locations</h1>
                </div>
                <div id="mapContainer">
                    <div id="mapdetails">


                        <div id="cardBase">
                            <div id="card_container">
                                <img src={this.state.img} alt="" />

                                <div id="map_details_card_des_head">
                                    Address:
                </div>
                                <div id="map_details_card_des">
                                    {this.state.Add}
                                </div>
                                <div id="map_details_card_des_head">
                                    Telephone Number:
                </div>
                                <div id="map_details_card_des">
                                    {this.state.Tell}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div id="map">
                        <Map
                            google={this.props.google}
                            zoom={8}
                            style={{
                                width: '100%',
                                height: '677px',
                            }}
                            initialCenter={{ lat: 7.904551604861729, lng: 80.4819715390625 }}
                        >
                            {this.displayMarkers()}
                        </Map>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDi0kmH7TLYbwpGDGwCgOogc0rqHMAgb9I")
})(store_locations)
