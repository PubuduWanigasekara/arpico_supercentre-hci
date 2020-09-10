import React from 'react'
import './contactUs.css';


export class contactUs extends React.Component {

    dtSet = {

        fName: { status: false, val: '' },
        lName: { status: false, val: '' },
        email: { status: false, val: '' },
        tp: { status: false, val: '' },
        comment: { status: false, val: '' },
        captcha: { status: false, val: '' }
    }

    constructor(props) {
        super(props);

    }


    fNameValidater = (event) => {
        let val = event.target.value

        if (val === '' || val.length < 3) {
    
            this.dtSet.fName.status = false;
        }
        else {
       
            this.dtSet.fName.status = true;
            this.dtSet.fName.val = val;
        }

    }
    lNameValidater = (event) => {
        let val = event.target.value

        if (val === '' || val.length < 3) {
        
            this.dtSet.lName.status = false;
        }
        else {
      
            this.dtSet.lName.status = true;
            this.dtSet.lName.val = val;
        }

    }
    emailValidater = (event) => {
        let val = event.target.value

        if (val === '') {
      
            this.dtSet.email.status = false;
        } else {
   
            this.dtSet.email.status = true;
            this.dtSet.email.val = val;
        }

    }
    tpValidater = (event) => {
        let val = event.target.value;

        if (val === '') {
    
            this.dtSet.tp.status = false;
        }
        else {
        
            this.dtSet.tp.status = true;
            this.dtSet.tp.val = val;
        }

    }
    commentValidater = (event) => {
        let val = event.target.value
        if (val === '') {
         
            this.dtSet.comment.status = false;
        } else {
      
            this.dtSet.comment.status = true;
            this.dtSet.comment.val = val;
        }

    }
    captchaValidater = (event) => {
        let val = event.target.value
        this.dtSet.captcha.val = val;
        this.dtSet.captcha.status = true;


    }
    formsubmiter = () => {
      
    }

    render() {
        return (
            <div id="mainpanal">
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
                                                    onChange={this.fNameValidater}
                                                    required />
                                            </td>
                                            <td className="w_10"></td>
                                            <td className="w_50_p">
                                                <input type="text"
                                                    id="contactustxt"
                                                    name="lName"
                                                    placeholder=""
                                                    onChange={this.lNameValidater}
                                                    required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3"> Email: </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3" data-tip="ex: example@exmple.com">
                                                <input type="text"
                                                    id="contactustxt"
                                                    placeholder=""
                                                    name="email"
                                                    onChange={this.emailValidater}
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
                                                    onChange={this.tpValidater}
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
                                                    onChange={this.commentValidater}
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
                                                    onChange={this.captchaValidater}
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
                                                <button className="button primary filled sub_btn" onClick={this.formsubmiter}>Submit</button>
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
