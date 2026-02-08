import React, { useState } from 'react';

const Question1 = () => {

    const [ name, setName] = useState("");
    const [email,  setEmail] = useState("");
    const [on, setOn] = useState(false);
    const [value, setValue] = useState("");


    const checkempty = (e) => {
        e.preventDefault();

        if(name==="" || email=="") setValue("Name and email is mandate")
        setOn(true)
    }


    return <>


        <form onSubmit={checkempty} >
                <input  type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter name' />
                <input  type="text" onChange={(e) => setEmail(e.target.value) }  placeholder='Enter email' />
                <button type='submit'>Submit</button>
        </form>

            {on && <p>{value}</p>}

            <p style={{color: "red"}}>{name}</p>
            <p style={{color: "blue"}}>{email}</p>
    </>
};

export default Question1;
