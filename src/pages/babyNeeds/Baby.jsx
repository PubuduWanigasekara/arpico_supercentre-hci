import React from 'react'
import './style.css'
import Select from 'react-select'

export default function Baby() {



    const options = [
        { value: 'price', label: 'price' },
       
      ]


    return (
        <>
           <div id="content_top">
            <div id="price_range">
                range
            </div>
            <div id="whistlist_holder">

            </div>
           </div>


           <div id="content_sort">
               <div id="item_count">
                    <div id="items_number">
                        223 items 
                    </div>
               </div>
               <div id="sort_controllers">
                <div className="first_controllers">
                    <div>
                     sort by  <Select options={options} id="sorter" />
                    </div>
                   
                    <button>
                    <i class="ar-down"></i>
                        </button>
                    <button>
                    <i class="ar-up"></i>
                    </button>
                    </div>
                <div id="search_controller">
                <i class="ar-search"></i>
                    <input type="text" name="" id="search_box_c"/>
                </div>
                <div id="wishlist_btn_holder">
                <div id="wishlist_round">
                    <i class="ar-heart"></i>
                    </div>
                </div>
               </div>
           </div>
        </>
    )
}
