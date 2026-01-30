import React, { useEffect, useState } from 'react'
import axios from "axios"

const DataPrint = () => {

        const [user, setUser] = useState([]);

        async function fetdata(){
                const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUser(res.data);
        }

        useEffect(() => {
                
                setTimeout( () => {
                fetdata()
                }, 2000)
        }, [])



        return (
                <div>
                        <h1>Data users print</h1>

                        <ul>
                                {user.map( item => {
                                        return <li key={item.id}> {item.name}</li>
                                })}
                        </ul>
                </div>
        )
}

export default DataPrint