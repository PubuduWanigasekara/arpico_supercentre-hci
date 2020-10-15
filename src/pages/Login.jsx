import React, { useState } from 'react'

export default function Login(props) {



    let [data, Setdata] = useState({
        username:'',
        password:''
    })


    const handleform = (event) => {
        event.preventDefault();

        
        console.log(data);

        props.logSet(true);
    }

    return (
        <div>
            <form onSubmit={e => { handleform(e); }}>
                <input type="text" name="username" id="" value={data.username} onChange={e => Setdata({...data , username : e.target.value})} />
                <input type="password" name="upass" id="" value={data.password} onChange={e => Setdata({...data , password : e.target.value})} />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
