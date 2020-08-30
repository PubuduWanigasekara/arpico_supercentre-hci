import React, { useEffect , useState } from 'react'


export default function Header() {

    

    let [mobmenu, setmobmenu] = useState(false);

    useEffect(() => {

     
            const width = window.innerWidth;

            if (width < 780) {
              
                setmobmenu( mobmenu = true);
                console.log(mobmenu);
            } else {
                setmobmenu( mobmenu = false);
                console.log(mobmenu);
            }
        

        window.onresize = () => {
            const width = window.innerWidth;

            if (width < 780) {
              
                setmobmenu( mobmenu = true);
                console.log(mobmenu);
            } else {
                setmobmenu( mobmenu = false);
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
                   
                </div>
            </div>
        </div>
    )
}
