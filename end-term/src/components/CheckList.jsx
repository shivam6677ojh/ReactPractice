import React, { useState } from 'react'

const CheckList = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    const [error, setError] = useState("");


    const validateFrom = (e) => {
        e.preventDefault()
        console.log("HI");

        // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^0-9A-Za-z]).{8,16}$/;

        // if(emailRegex.test(email)){
        //     setError("Email is not valid");
        // }
        if(!passwordRegex.test(password)){
            setError("Password is not valid");
            setLogin(false)
            return 
        }

        setError("");
        setLogin(true);
    }



    return <>

        <form onSubmit={validateFrom}>


            <input type="text" placeholder='Enter name' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />

            <button type='submit'>Login</button>

        </form>

        {error && <p>`Error occurced while login validaion fails {error}`</p>}
        {login && <p>`UserName: {email} Loggedin`</p>}
    </>
}

export default CheckList