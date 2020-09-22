import React from 'react'
import Select from 'react-select'

export default function Location(props) {

    const update = (e)=>{
        props.updatelocation(e.value)
    }

    const options = [
        { value: 'Hydepark corner', label: 'Hydepark corner' },
        { value: 'horana', label: 'horana' },
        { value: 'malabe', label: 'malabe' },
        { value: 'kaduwela', label: 'kaduwela' }
      ]

      
    return (
        <div>
            <Select options={options} onChange={update} id="loc_select" />
        </div>
    )
}
