import React, { useState } from 'react'

const Forms = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showdata, setShowdata] = useState(false);


    function checkform(e){
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d){8,}$/;

        if(name === "" || email === "" || password === ""){
            alert("All fields are required");
            return;
        }
        if(!emailRegex.test(email)){
            alert("Invalid email format");
            return;
        }
        if(!passwordRegex.test(password)){
            alert("Password must be at least 8 characters long and contain at least one letter and one number");
            return;
        }
        alert("Form submitted successfully!");

        setShowdata(true);

    }   

  return (

    <form onSubmit={checkform}>

        <input onChange={(e) => setName(e.target.value)} placeholder='Enter name' type="text" />
        <input onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' type="text" />
        <input onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' type="text" />

        <button >submit</button>

        {showdata && (
            <div>
                <h3>Submitted Data:</h3>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
            </div>
        )}
    </form>
  )
}

export default Forms