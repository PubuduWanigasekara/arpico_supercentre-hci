import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import './payment.css'
import { motion } from 'framer-motion'
import Chip from '../../assets/card_add.svg'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

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

    const toggleCard = (e) => {

        e == true ? setcardToggle(true) : setcardToggle(false);

    }


    const showCards = () => {
        setShowcards(!show);
        window.scrollTo(0,0);
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
                                                    placeholder="cvc"
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
                                        {cardData.focus}
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
                    </div>
                </div>
            </div>
        </div>
    )
}
