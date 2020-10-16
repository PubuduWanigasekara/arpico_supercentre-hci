import React , {useState} from 'react'
import {useHistory , Link} from 'react-router-dom'

export default function ProductCard(props) {

    const history = useHistory();

    let product = {
        title:props.title,
        price:props.price,
        description:props.des,
        image:props.img,
        stock:props.stock,
        id:props.id,
        index:props.index
    }

   
    let [quentity,setQ] = useState(0)

   

    const increment = ()=>{
        
        setQ(quentity++)
    }

    const decrement = ()=>{
        if(quentity <= 0){

        }else{
            setQ(quentity--)
        }
    }

    let wishlist = JSON.parse(localStorage.getItem('wishlistitems'))
    console.log(wishlist)
   


    const addtoWishlist=()=>{
        let wishdata = JSON.stringify(wishlist)
        wishlist.push(product);
        localStorage.setItem('wishlistitems',wishdata)
    }
   
    
    return (
        <div id="cardBase">
            <div id="card_container">
                {!product.stock && <div id="stock_status">out of stock</div>}
                <img src={product.image} alt=""/>
                
                <div id="card_title">
                    {product.title}
                </div>
                <div id="card_des">
                {product.description}
                </div>
                <div id="card_price">
                Rs {product.price}.00 
                </div>
                <div id="card_quantity">
                    <button id="card_round_btn">
                    <i class="ar-minus " onClick={decrement}></i>
                    </button>
                    <input type="text" name="" value={quentity} id="card_number"/>
                        <button id="card_round_btn" onClick={increment}>
                            <i class="ar-plus "></i>
                        </button>
                </div>

                <div id="card_controllers">
                    <Link to={`/view/${product.index}/${product.id}`}>
                    <button id="card_r_view">
                    view
                </button>
                    </Link>
               
                    <button id="card_r_wishlist" onClick={addtoWishlist}>
                    <i class="ar-plus white"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
