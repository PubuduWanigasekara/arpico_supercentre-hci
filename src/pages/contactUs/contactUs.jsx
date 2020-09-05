import React from 'react'
import './contactUs.css';


export class contactUs extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="mainpanal">
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
                                                    required />
                                            </td>
                                            <td className="w_10"></td>
                                            <td className="w_50_p">
                                                <input type="text"
                                                    id="contactustxt"
                                                    name="lName"
                                                    placeholder=""
                                                    required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3"> Email: </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3">
                                                <input type="text"
                                                    id="contactustxt"
                                                    placeholder=""
                                                    name="email"
                                                    required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3"> Phone Number: </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3">
                                                <input type="text"
                                                    id="contactustxt"
                                                    name="tp"
                                                    required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3"> Comment: </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3">
                                                <textarea
                                                    id="contactustxtaria"
                                                    name="comment"
                                                    required >
                                                </textarea>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td colSpan="3"> Please type the letters and numbers below * </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3">
                                                <input type="text"
                                                    id="contactustxt"
                                                    name="captcha"
                                                    required />
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
                                                <button className="button primary filled sub_btn">Submit</button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default contactUs