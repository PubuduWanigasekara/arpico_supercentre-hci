import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class contactUs extends React.Component {
    render() {
        return (
         <div>
                <div id="breadcom">
            <a id="breadcomText" href="/home">Home</a> /
            <a id="breadcomText" href="#">Contact Us</a>
            </div>
            <div id="maindiv">
                <h1 id="map_h1">Contact Us</h1>
                <div id="contactUs_container">
                    <div id="contactus_formcontainer">

                        <div id="contactcard_with">
                            <div id="card_container">
                                <form>
                                    <table id="contactusTabal">
                                        <tr>
                                            <td className="w_50_p"><label>First Name:</label></td>
                                            <td className="w_10"></td>
                                            <td className="w_50_p"><label>Last Name :</label></td>
                                        </tr>
                                        <tr>
                                            <td className="w_50_p"> <input type="text" id="contactustxt" placeholder="First Name" required /> </td>
                                            <td className="w_10"></td>
                                            <td className="w_50_p"><input type="text" id="contactustxt"  placeholder="Last Name" required /></td>
                                        </tr>

                                        <tr>
                                            <td colSpan="3"> Email: </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3" data-tip="ex: example@exmple.com"> <input type="text" id="contactustxt" placeholder="Email" required /> </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3"> Phone Number: </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3" data-tip="ex: 07xxxxxxxx/+947xxxxxxxx"> <input type="text" id="contactustxt" required /> </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3"> Comment: </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3"> <textarea id="contactustxtaria" required ></textarea> </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3"> Please type the letters and numbers below * </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3"> <input type="text" id="contactustxt" required /> </td>
                                        </tr>
                                        <tr>
                                            <td id="captiontd">
                                                <div>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/hciapp-7355d.appspot.com/o/Capture.PNG?alt=media&token=b04df51f-f592-428c-a211-775a61462abd" alt="" />
                                                </div>
                                            </td>
                                            <td colSpan="2"> <button className="button primary filled sub_btn">Reload captcha</button> </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button className="button primary filled sub_btn">Submit</button>
                                            </td>
                                        </tr>
                                    </table>

                                </form>
                            </div>
                        </div>

                    </div>
                    <div id="contactusinfocontainer">
                        <div id="cinfo">
                            <div id="contactinfocard">

                                <div id="card_container">
                                    <div id="contactInfodetails">
                                        <h2>contact information</h2>
                            📍   No: 310, High Level Road, Nawinna, Maharagama.<br />
                            📞 Phone: 011 43 10 500 <br />
                            📧 Email: info@arpicosupercentre.com<br />
                            🕐 Support 24/7/365<br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="infoimg">
                        <Map
                                google={this.props.google}
                                zoom={10}
                                style={{
                                    position: 'absolute',
                                    width: '682px',
                                    height: '396px',
                                }}
                                initialCenter={{ lat: 6.853084, lng: 79.916848 }}
                            >
                                <Marker

                                    position={{
                                        lat: 6.853084,
                                        lng: 79.916848
                                    }}
                                >

                                </Marker>
                            </Map>
                        </div>
                    </div>

                </div>
            </div>
         </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDi0kmH7TLYbwpGDGwCgOogc0rqHMAgb9I")
})(contactUs)
