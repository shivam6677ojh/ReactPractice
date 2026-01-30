import React, { useState } from 'react'

const ShowData = () => {
    

    const[email, setEmail] = useState()
    const[password, setPassword] = useState();
    const[submitted, setSubmitted] = useState(false);

    function handleaction(e){
        e.preventDefault();
        setSubmitted(true);
    }




    return (
        <div>
            <form onSubmit={handleaction} action="#">
                <input type="text" onChange={(e) => setEmail(e.target.value)}  placeholder='Enter email'/>
                <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
                <button>Showhere!! below</button>
            </form>

            <div>
                <p>
                    Here are para graph data
                </p>
                {submitted && <h2>Submiited data</h2>}
                {submitted && <h2>Submiited {email}</h2>}
                {submitted && <h2>Submiited {password}</h2>}
            </div>
        </div>
    )
}

export default ShowData