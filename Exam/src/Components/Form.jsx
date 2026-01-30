// import React, { useState } from 'react'

// const Form = () => {
//     const [password, setPassword] = useState();
//     const [email, SetEmail] = useState();
//     const [show, setShow] = useState(false);
//     const [strength, setStrength] = useState("");



//     function handlesubmit(e){
//         e.preventDefault();
//         setShow(true);
//     }




//     return (
//         <div>

//                 <form onSubmit={handlesubmit} action="">

//                     <input type="text" value={email} onChange={(e) => SetEmail(e.target.value)} />

//                     <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='Enter password'/>

//                     <button>Show Error</button>

//                 </form>


//                 {show && <h2>Hi i am here</h2>}
//                 {show && <h2>Password: {password}</h2>}
//                 {show && <h2>Email: {email}</h2>}

//         </div>
//     )
// }

// export default Form


import React, { useRef, useState } from 'react'


const Form = () => {

    const [email , setEmail] = useState();
    const [error, setError] = useState("");


    function handlesubmit(e) {
        e.preventDefault();
        const value = e.target.value;

        setEmail(value);

        if(!value.includes("@")){
            setError("Enter proper email")
        }
        else{
            setError("");
        }
    }


    return (
        <div>

            <input  placeholder='Enter email' onChange={handlesubmit}  type="text" />
            {error && <h2>Hi there is error</h2>}

        </div>
    )
}

export default Form