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
                   
                    <button>down</button>
                    <button>up</button>
                    </div>
                <div>2</div>
                <div>3</div>
               </div>
           </div>
        </>
    )
}
