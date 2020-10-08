import React, { Component } from 'react'
import './productVariety.css'
import Aos from "aos"
import "aos/dist/aos.css"


export default class productVariety extends Component {
    constructor(props) {
        super(props);
        Aos.init({ duration: 2000 });
    }

    render() {
        return (
            <div>
                <div id="bodypr">
                    <div id="pvcardBase" >
                        <div id="pvcard_container" data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom">
                            <h2>Product Variety</h2><hr />
                            <div className="d-flex">
                                {/* <img className="pcimg" src="https://firebasestorage.googleapis.com/v0/b/hciapp-7355d.appspot.com/o/unnamed.jpg?alt=media&token=45f543dc-14f7-4116-885f-e4ae6e5406f1" alt="" /> */}

                                <div>

                                    <p>
                                        Customer convenience and product variety has enabled the Arpico Supercentres, Super stores and Arpico Daily super markets to gain a competitive edge. The widest range of products from daily essentials, fresh produce, household goods, electronic appliances to kitchenware and furniture, with the promise to shoppers that they are in the most convenient shopping destination in the country.
                      </p>
                                    <p>
                                        “Arpico Daily” Supermarkets, the latest addition to our retail chain offers Fast Moving Consumer Goods, daily essentials, dairy products, fresh fruits, vegetables, seafood and meat, household items such as kitchenware, glassware, plasticware, garden tools, rubber products, stationery, toys and an array of electronics.
                      </p>
                                    <p>
                                        “Arpico Showroom”, our pioneering retail model still continues to cater to customers across the country with a specialized range of essential household items ranging from hardware, plasticware, kitchenware, glassware, toys, stationery, garden tools, to water tanks, rubber products, mattresses & furniture.
                      </p>
                                </div>
                                <div className="pvImage">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/hciapp-7355d.appspot.com/o/unnamed.jpg?alt=media&token=45f543dc-14f7-4116-885f-e4ae6e5406f1" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="pvcardBase" >
                        <div id="pvcard_container" data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom">
                            <h2>Retail Chain</h2><hr />
                            <p>
                                We operate through a growing network of “Arpico Supercentre” outlets located in key towns in the Western, Central and |Southern provinces with easy access routes to offer the most convenient shopping experience in Sri Lanka. The Arpico retail chain comprises of 17 Arpico Supercentres, 19 showrooms and 22 Arpico Daily supermarkets. Arpico Supercentres, the company’s flagship outlets, offer extensive parking, bill payments, banking facilities, oder lifestyle needs. Located in and around the footprint of Arpico Supercentres, Arpico Daily Supermarkets cater to your daily top-up requirements. Rapidly expanding, an Arpico Daily Supermarket will be closer to your neighborhood soon.
                      </p>
                            <p>
                                We operate through a growing network of “Arpico Supercentre” outlets located in key towns in the Western, Central and |Southern provinces with easy access routes to offer the most convenient shopping experience in Sri Lanka. The Arpico retail chain comprises of 19 Arpico Supercentres, 19 showrooms and 22 Arpico Daily supermarkets. Arpico Supercentres, the company’s flagship outlets, offer extensive parking, bill payments, banking facilities and other lifestyle needs. Located in and around the footprint of Arpico Supercentres, Arpico Daily Supermarkets cater to your daily top-up requirements. Rapidly expanding, an Arpico Daily Supermarket will be closer to your neighborhood soon.
                      </p>
                        </div>
                    </div>

                    <div id="pvcardBase" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">
                        <div id="pvcard_container" className="mb-15">
                            <h2>What’s in Store</h2><hr />
                            <div className="d-flex">

                                <div className="wsImage">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/hciapp-7355d.appspot.com/o/NTB-Arpico.jpg?alt=media&token=b7a4bb8b-bb4f-4677-a5ce-00fc982a9355" alt="" />
                                </div>
                                <div>

                                    <p>
                                        Arpico Supercentre is the most preferred retailer in the country housing the largest selection of Fast Moving Consumer Goods (FMCG), Household Goods, Furniture and Electronics, whilst providing a host of value added services such as Banking Services, ATM’s, Credit Card and Mobile Bill Payment facilities, Pharmacies, Bakeries and many other lifestyle needs.
                              </p>
                                    <p>
                                        Not only do we offer you the most convenient shopping experience but also the best value buys, helping you spend less everyday. Our sales promotions are aimed at providing the best products at the best price with the best conveniences.
                              </p>
                                    <p>
                                        A game changing 25% discount is offered on an array of daily essentials, household durables and electronics. Over 200 products are on offer every month without the requirement of loyalty cards, credit cards or minimum bill values. Pick up your “Daily Deals” tabloid from any Arpico Supercentre to uncover all product offers and get the best value on your shopping.
                              </p>
                                    <p>
                                        Lowest prices for selected top moving fresh seafood, fruits, vegetables and meats during selected weekends or weekdays. Drop by at any Arpico Supermarket after work on Friday or with your family during the weekend to purchase your favourite fresh produce at the lowest prices.
                              </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

