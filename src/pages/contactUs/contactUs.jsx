import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import swal from 'sweetalert';
import Lottie from "lottie-react";
import cus from './19948-contact-us.json';
import c1 from './lf20_eBcQGa.json';
import c2 from './lf20_DC9jU4.json';
import c3 from './lf20_4eAwik.json';
import './contactUs.css'


export class contactUs extends React.Component {
    dtSet = {

        fName: { status: false, val: '', message: 'Can not be empty and must be more than 3 character long' },
        lName: { status: false, val: '', message: 'Can not be empty and must be more than 3 character long' },
        email: { status: false, val: '', message: 'Place heck your email address agin' },
        tp: { status: false, val: '', message: 'Place heck your phone number agin' },
        comment: { status: false, val: '', message: 'canot be empty' },
        captcha: { status: false, val: '', message: 'Enter the message as it\'s show' }
    }
    constructor(props) {
        super(props);
        this.state = {
            fName: 'none',
            lName: 'none',
            email: 'none',
            tp: 'none',
            comment: 'none',
            captcha: 'none',
            fNameclass: 'contactustxt',
            lNameclass: 'contactustxt',
            emailclass: 'contactustxt',
            tpclass: 'contactustxt',
            commentclass: '',
            captchaclass: 'contactustxt',
        };
    }


    fNameValidater = (event) => {
        let val = event.target.value

        if (val === '' || val.length < 3) {
            this.setState({
                fName: 'block',
                fNameclass: 'textborder contactustxt'
            });
            this.dtSet.fName.status = false;
        }
        else {
            this.setState({
                fName: 'none',
                fNameclass: 'contactustxt'
            });
            this.dtSet.fName.status = true;
            this.dtSet.fName.val = val;
        }

    }
    lNameValidater = (event) => {
        let val = event.target.value

        if (val === '' || val.length < 3) {
            this.setState({
                lName: 'block',
                lNameclass: 'textborder contactustxt'
            });
            this.dtSet.lName.status = false;
        }
        else {
            this.setState({
                lName: 'none',
                lNameclass: 'contactustxt'
            });
            this.dtSet.lName.status = true;
            this.dtSet.lName.val = val;
        }

    }
    emailValidater = (event) => {
        let val = event.target.value
        var emailRgex = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$', 'g');

        if (val === '' || !emailRgex.test(val)) {
            this.setState({
                email: 'block',
                emailclass: 'textborder contactustxt'
            });
            this.dtSet.email.status = false;
        } else {
            this.setState({
                email: 'none',
                emailclass: 'contactustxt'
            });
            this.dtSet.email.status = true;
            this.dtSet.email.val = val;
        }

    }
    tpValidater = (event) => {
        let val = event.target.value;
        var tpRgex = new RegExp('^\\d{10}$')

        if (val === '' || !tpRgex.test(val)) {
            this.setState({
                tp: 'block',
                tpclass: 'textborder contactustxt'
            });
            this.dtSet.tp.status = false;
        }
        else {
            this.setState({
                tp: 'none',
                tpclass: 'contactustxt'
            });
            this.dtSet.tp.status = true;
            this.dtSet.tp.val = val;
        }

    }
    commentValidater = (event) => {
        let val = event.target.value
        if (val === '') {
            this.setState({
                comment: 'block',
                commentclass: 'textborder contactustxt'
            });
            this.dtSet.comment.status = false;
        } else {
            this.setState({
                comment: 'none',
                commentclass: 'contactustxt'
            });
            this.dtSet.comment.status = true;
            this.dtSet.comment.val = val;
        }

    }
    captchaValidater = (event) => {
        let val = event.target.value
        this.dtSet.captcha.val = val;
        this.dtSet.captcha.event = event;
        this.dtSet.captcha.status = true;
        this.setState({
            captchaclass: 'contactustxt',
            captcha: 'none'
        });

    }
    formsubmiter = () => {
        var txt = "First Name:    " + this.dtSet.fName.val +
            "\nLast Name:  " + this.dtSet.lName.val +
            "\nEmail:  " + this.dtSet.email.val +
            "\nPhone Number:  " + this.dtSet.tp.val +
            "\n\nComment:    " + this.dtSet.comment.val;

        if (this.dtSet.fName.status && this.dtSet.lName.status && this.dtSet.email.status && this.dtSet.tp.status && this.dtSet.comment.status) {

            if (this.dtSet.captcha.val != 'DGGB') {
                this.setState({
                    captcha: 'block',
                    captchaclass: 'textborder contactustxt'
                });
            } else {

                swal({
                    title: " please confirm your information ",
                    text: txt,
                    buttons: {
                        cancel: "Close",
                        catch: {
                            text: "Confirme",
                            value: "confirmed",
                        }
                    }
                }
                ).then((value) => {
                    if (value === "confirmed") {
                        swal("", "Informations are sended", "success");
                    }
                });
            }
        }
        else {
            if (!this.dtSet.fName.status) {
                this.setState({
                    fName: 'block',
                    fNameclass: 'textborder contactustxt'
                });
            }

            if (!this.dtSet.lName.status) {
                this.setState({
                    lName: 'block',
                    lNameclass: 'textborder contactustxt'
                });
            }
            if (!this.dtSet.email.status) {
                this.setState({
                    email: 'block',
                    emailclass: 'textborder contactustxt'
                });
            }
            if (!this.dtSet.tp.status) {
                this.setState({
                    tp: 'block',
                    tpclass: 'textborder contactustxt'
                });
            }
            if (!this.dtSet.comment.status) {
                this.setState({
                    comment: 'block',
                    commentclass: 'textborder contactustxt'
                });
            }

            if (!this.dtSet.captcha.status) {
                this.setState({
                    captcha: 'block',
                    captchaclass: 'textborder contactustxt'
                });
            }

            swal("Someting wrong ", "please check the information again", "error");
        }
    }

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

                                    <table id="contactusTabal">
                                        <tr>
                                            <td className="w_50_p"><label>First Name:</label></td>
                                            <td className="w_10"></td>
                                            <td className="w_50_p"><label>Last Name :</label></td>
                                        </tr>
                                        <tr>
                                            <td className="w_50_p">
                                                <input
                                                    type="text"
                                                    name="fName"
                                                    id="contactustxt"
                                                    className={this.state.fNameclass}
                                                    onChange={this.fNameValidater}
                                                    required />
                                            </td>
                                            <td className="w_10"></td>
                                            <td className="w_50_p">
                                                <input type="text"
                                                    id="contactustxt"
                                                    className={this.state.lNameclass}
                                                    name="lName"
                                                    placeholder=""
                                                    onChange={this.lNameValidater}
                                                    required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="alert-danger" style={{ display: this.state.fName }}>{this.dtSet.fName.message}</div>
                                            </td>
                                            <td className="w_10"></td>
                                            <td>
                                                <div className="alert-danger" style={{ display: this.state.lName }}>{this.dtSet.lName.message}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3"> Email: </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3" data-tip="ex: example@exmple.com">
                                                <input type="text"
                                                    id="contactustxt"
                                                    className={this.state.emailclass}
                                                    placeholder=""
                                                    name="email"
                                                    onChange={this.emailValidater}
                                                    required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3">
                                                <div className="alert-danger" style={{ display: this.state.email }}>{this.dtSet.email.message}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3"> Phone Number: </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3" data-tip="ex: 07xxxxxxxx/+947xxxxxxxx">
                                                <input type="text"
                                                    id="contactustxt"
                                                    className={this.state.tpclass}
                                                    name="tp"
                                                    onChange={this.tpValidater}
                                                    required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3">
                                                <div className="alert-danger" style={{ display: this.state.tp }}>{this.dtSet.tp.message}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3"> Comment: </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3">
                                                <textarea
                                                    id="contactustxtaria"
                                                    className={this.state.commentclass}
                                                    name="comment"
                                                    onChange={this.commentValidater}
                                                    required >
                                                </textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3">
                                                <div className="alert-danger" style={{ display: this.state.comment }}>{this.dtSet.comment.message}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3"> Please type the letters and numbers below * </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3">
                                                <input type="text"
                                                    id="contactustxt"
                                                    className={this.state.captchaclass}
                                                    name="captcha"
                                                    onChange={this.captchaValidater}
                                                    required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3">
                                                <div className="alert-danger" style={{ display: this.state.captcha }}>{this.dtSet.captcha.message}</div>
                                            </td>
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
                                                <button className="button primary filled sub_btn" onClick={this.formsubmiter}>Submit</button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                        </div>
                        <div id="contactusinfocontainer">
                            <div id="cinfo">
                                <div id="contactinfocard">
                                    <div id="card_container">
                                        <div id="contactInfodetails">
                                            <Lottie id="stack-top" animationData={cus} />
                                            <h2>Contact information</h2><hr />
                            📍   No: 310, High Level Road, Nawinna, Maharagama.<br />
                            📞 Phone: 011 43 10 500 <br />
                            📧 Email: info@arpicosupercentre.com<br />
                            🕐 Support 24/7/365<br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="infoimg" className="mapcontaint">
                                <Map
                                    google={this.props.google}
                                    zoom={10}
                                    style={{
                                        position: 'absolute',
                                        width: '682px',
                                        height: '411px',
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
