import React, { useEffect } from 'react'


export default function Header() {

    let mobmenu = false

    useEffect(() => {
        window.onresize = () => {
            const width = window.innerWidth;

            if (width < 780) {
                mobmenu = true;
                console.log(mobmenu);
            } else {
                mobmenu = false;
                console.log(mobmenu);
            }

        }
    });

    const logo = {
            width:'120px'
        
    }

    return (
        <div>
            <div id="navbar">
                <div id="logo">
                    <img src="https://arpicosupercentre.com/pub/media/logo/default/logo.png" alt="" style={logo}/>
               </div>
                <div id="links">

                    <ul style={{display: !mobmenu ? 'flex' : 'none'}}>
                        <li>Home</li>
                        <li>Contact us</li>
                        <li>Faq</li>
                        <li><button className="button primary outline login">login</button></li>
                    </ul>
                    <li style={{display: mobmenu ? 'flex' : 'none'}} id="mobmenu">M</li>
                </div>
            </div>
        </div>
    )
}
