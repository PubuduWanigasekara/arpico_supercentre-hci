import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './store_locations.css';


export class store_locations extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stores: [
                { location: { lat: 6.917588, lng: 79.861097 }, add: "2, 69 Hyde Park Corner, Colombo 00200", Tel: "+94112683949", img: "https://firebasestorage.googleapis.com/v0/b/hciapp-7355d.appspot.com/o/a4.jpg?alt=media&token=95387043-6947-4cc0-b737-31d0d9518856" },
                { location: { lat: 7.002230, lng: 79.949216 }, add: "172/6 Kandy Rd, Kadawatha", Tel: "+94114643615", img: "https://firebasestorage.googleapis.com/v0/b/hciapp-7355d.appspot.com/o/a1.jpg?alt=media&token=2317e5ae-7cc8-4d7d-8440-15abfd97eea6" },
                { location: { lat: 7.253100, lng: 80.341303 }, add: "No 64/2 Colombo - Kandy Rd, Kegalle 71000", Tel: "+94352221833", img: "https://firebasestorage.googleapis.com/v0/b/hciapp-7355d.appspot.com/o/a2.jpg?alt=media&token=62cb6128-ed01-42af-9057-1a937fb93303" },
                { location: { lat: 7.216848, lng: 80.597277 }, add: "Kandy Rd, Gelioya 20620", Tel: "+94112464646", img: "https://firebasestorage.googleapis.com/v0/b/hciapp-7355d.appspot.com/o/a3.jpg?alt=media&token=5555e6a8-d597-4d01-951f-ca960cd38203" }
            ],
            Add: "",
            Tell: "",
            img: "https://firebasestorage.googleapis.com/v0/b/hciapp-7355d.appspot.com/o/ARPICO.jpg?alt=media&token=3cddd392-dce3-4f42-b15a-ca604707c4f3",
            lat: '',
            lng: '',
            isDisplay:'hide'
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
                onClick={() => {this.getMakerData(index,this.props,this.marker);}}
               >

            </Marker>
        })
    }

    getMakerData(index,props,marker) {
       
        this.setState({
            isDisplay:'',
            Add: this.state.stores[index].add,
            Tell: this.state.stores[index].Tel,
            img: this.state.stores[index].img,
            lat: this.state.stores[index].location.lat,
            lng: this.state.stores[index].location.lng
        });
    }

    showInMapClicked = () => {
        window.open("https://maps.google.com?q=" + this.state.lat + "," + this.state.lng);
    };

    render() {
        return (
            <div>

                <div id="map_headline">
                    <h1 id="map_h1">Store Locations</h1>
                </div>
                <div id="mapContainer">
                    <div id="mapdetails">


                        <div id="cardBase">
                            <div id="card_container">
                                <img src={this.state.img} alt="" />

                                <div className={this.state.isDisplay} id="map_details_card_des_head">
                                    Address:
                </div>
                                <div className={this.state.isDisplay} id="map_details_card_des">
                                    {this.state.Add}
                                </div>
                                <div className={this.state.isDisplay} id="map_details_card_des_head">
                                    Telephone Number:
                </div>
                                <div className={this.state.isDisplay} id="map_details_card_des">
                                    {this.state.Tell}
                                </div>
                                <button className={this.state.isDisplay} id="button_navigation" onClick={this.showInMapClicked}><span> To navigate </span></button>
                               
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
