import React,{useEffect , useState} from 'react'



export default function WishlistProductCard(props) {

    // let [data,setData] = useState({
    //     qty:'',
    //     price:'',
    //     name:''
    // })

//    function set(){
//     setData({...data , qty:props.qty})
//     setData({...data , price:props.price})
//     setData({...data , name:props.name})
//    }

const rem =(e)=>{
   console.log(e)
    props.removeItem(e)

}

    useEffect(()=>{
   
    })

    return (
        <div id="w_cardBase">
            <div id="w_card_container">
                <div id="w_card_img_container">
                <img id="w_img" src="http://lorempixel.com/270/200/food/" alt=""/>
                </div>
                <div id="w_card_product_details_container">
                <div id="w_card_des">
                   
    {props.name}  {props.key} <div id="w_card_number">{props.qty}X</div>
                </div>
                <div id="w_card_price">
                    LKR {props.price}
                </div>
                </div>
                <div>
                <div id="card_controllers">
                <button id="w_card_r_button">
                       <i class="ar-deliver w_card_r_button_cart_icon"></i>
                    </button>
                  <button id="w_card_r_button" onClick={()=>rem(props.item)}>
                      <i class="ar-remove w_card_r_button_remove_icon"></i>
                    </button>
                     </div>
                </div> 
                </div>
            </div>
   
    )
}
