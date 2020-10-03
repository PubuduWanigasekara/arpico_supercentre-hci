import React, { useEffect, useState } from 'react'
import WishlistProductCard from '../../components/WishlistProductCard'

export default function Wishlist() {

    let [data, Setdata] = useState([])

    useEffect(() => {

        if (JSON.parse(localStorage.getItem('wishlistItems'))) {
            console.log("1");
            Setdata(JSON.parse(localStorage.getItem('wishlistItems')))
        }
        else {
            console.log("0");
        }

    }, []);

    let sdata = {
        name: "test",
        price: 300,
        qty: 2
    }

    const add = () => {
        Setdata([...data, sdata])

        console.log(data);
    }
   

    const remove = (itm)=>{     
        data.splice(itm,1)
    }

    return (
        <div>

            {data.map((it , index) => {
                return (
                    <WishlistProductCard
                        removeItem={()=>remove}
                        key={index}
                        item={index}
                        name={it.name}
                        price={it.price}
                        qty={it.qty} />
                )
            }
            )}



            <button onClick={add}>test</button>
        </div>
    )
}
