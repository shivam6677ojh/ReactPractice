import React, { useEffect, useState } from 'react'


const DummyApi = () => {
    const [data, setdata] = useState([]);

    const fetchData =  async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await res.json();
        setdata(jsonData);
    }

    useEffect(() => {
        fetchData();
    },[]);


    return (
        <div>
            <h1>hi</h1>
            {
                data.map((item) =>(
                    <p key={item.id}>{item.title}</p>
                ))
            }
        </div>
    )
}

export default DummyApi