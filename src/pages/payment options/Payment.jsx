import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import './payment.css'
import { motion } from 'framer-motion'
import Chip from '../../assets/card_add.svg'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useHistory } from 'react-router-dom'

export default function Payment() {

    let [cardToggle, setcardToggle] = useState(false)
    let [show, setShowcards] = useState(false)
    let [cardData, setcardData] = useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',

    })
    let [validate, setValidate] = useState({
        error: false,
        msg: '',
    })
    const history = useHistory();

    const toggleCard = (e) => {

        e == true ? setcardToggle(true) : setcardToggle(false);

    }


    const showCards = () => {
        setValidate({ ...validate, error: false, msg: '' });
        setShowcards(!show);
        window.scrollTo(0, 0);
    }

    const handleInputFocus = (e) => {
        setcardData({ ...cardData, focus: e.target.name });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setcardData({ ...cardData, [name]: value });


    }

    const checkNum = (e) => {
        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    }


    const validateCard = () => {

        if(show){
            setValidate({ ...validate, error: false, msg: '' });
            history.push('/')
        }else{
            if (cardData.name === '' || null) {
                setValidate({ ...validate, error: true, msg: 'please enter card holder name' });
            }
            else if (cardData.number === '' || null) {
                setValidate({ ...validate, error: true, msg: 'please enter valid card number' });
            }
            else if (cardData.number.length < 16) {
                setValidate({ ...validate, error: true, msg: 'please enter valid card number' });
            }
    
            else if (cardData.cvc == '' || null) {
                setValidate({ ...validate, error: true, msg: 'please enter valid cvv number' });
            }
            else if (cardData.cvc.length < 3) {
                setValidate({ ...validate, error: true, msg: 'please enter valid cvv number' });
            }
            else if (cardData.expiry === '' || null) {
                setValidate({ ...validate, error: true, msg: 'please enter valid expire date' });
            }
            else if (cardData.expiry.length < 4) {
                setValidate({ ...validate, error: true, msg: 'please enter valid expire date' });
                setValidate({ ...validate, error: true, msg: 'please enter valid expire date' });
            }
            
            else {
                setValidate({ ...validate, error: false, msg: '' });
                history.push('/')
            }
        }
        }

        

    return (
        <div>
            <div id="payment_container">
                <div id="payment_tabs">
                    <div id="tab1">
                        <div id="payment_title">
                            <input type="checkbox" name="" id="default_payment" onChange={showCards} /> Default payment option
                      </div>
                        <AnimatePresence initial={false}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            {!show ?
                                <>
                                    <motion.div id="or" initial={{ opacity: 0, y: 100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, Y: 100 }}>
                                        OR
                      </motion.div>
                                    <motion.div id="payment_card" initial={{ opacity: 0, y: 100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, Y: 100 }}>
                                        <div id="card_icons">
                                            <motion.i class="ar-visa" onClick={() => toggleCard(false)} id={!cardToggle ? "active" : "normal"}></motion.i>
                                            <motion.i class="ar-mastercard" onClick={() => toggleCard(true)} id={cardToggle ? "active" : "normal"}></motion.i>

                                        </div>

                                        <form id="input_card_form"
                                            onChange={handleInputChange}
                                        >
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Card Holder name"
                                                maxLength={20}
                                                onFocus={handleInputFocus}
                                            />
                                            <input
                                                type="tel"
                                                name="number"
                                                placeholder="Card Number"
                                                maxLength={16}
                                                onFocus={handleInputFocus}
                                                onInput={checkNum}


                                            />
                                            <div>
                                                <input
                                                    className="short_input"
                                                    type="tel"
                                                    name="cvc"
                                                    placeholder="cvv"
                                                    maxLength={3}
                                                    onFocus={handleInputFocus}
                                                    onInput={checkNum}


                                                />

                                                <input
                                                    className="short_input"
                                                    pattern="[0-9]+"
                                                    type="tel"
                                                    name="expiry"
                                                    placeholder="expiry"
                                                    maxLength="4"
                                                    max={4}
                                                    onFocus={handleInputFocus}
                                                    onInput={checkNum}


                                                />
                                            </div>
                                        </form>


                                    </motion.div>
                                </> : <></>}

                        </AnimatePresence>

                    </div>


                    <div id="tab2">
                        {!show ?
                            <>
                                {cardToggle && show ?
                                    <>

                                    </>
                                    : <>
                                        <Cards id="creditcard"
                                            cvc={cardData.cvc}
                                            expiry={cardData.expiry}
                                            focused={cardData.focus}
                                            name={cardData.name}
                                            number={cardData.number}

                                        />

                                    </>
                                }

                            </> : <>
                                {/* <motion.img src={Chip} id="chip_card" initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, Y: 100, scale: 0 }}></motion.img>  */}
                                <Cards id="creditcard"
                                    cvc={cardData.cvc}
                                    expiry={cardData.expiry}
                                    focused={cardData.focus}
                                    name={cardData.name}
                                    number={cardData.number}

                                />
                            </>}
                        <button id="pay_now" onClick={validateCard}>Pay now</button>
                        { validate.error &&
                            <div id="payment_error">
                                {validate.msg}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
