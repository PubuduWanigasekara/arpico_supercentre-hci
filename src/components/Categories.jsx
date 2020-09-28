import React from 'react'
import './categories.css'

export default function Categories(props) {
    return (
        <>
            <div id="cat_container">
                <button onClick={()=> props.openCat()}>
                    close
                </button>
            </div>
        </>
    )
}
