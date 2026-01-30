import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState();

    //using without async await Get Request

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setPosts(data.slice(0,5));
    //         setTitle(data[0].title);
    //     })
    // },[]);

    // using async await GetRequest
    const getPosts = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setPosts(data.slice(0,5));
    }


    // addpost using fetch and async await

    const addPosts = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({ 
                title: 'foo',
                body: 'bar',
                userId: 1
                }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const data = await res.json();
        setPosts([data, ...posts]);
        setTitle("");

    }

    useEffect(() => {
        getPosts();
    },[]);

    return (
        <div>
            <h1>Fetch Api with (async/await)</h1>
            <input type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder='Enter title'
            />

            <button onClick={addPosts}>Add title</button>


            {
                posts.map((post) => (
                    <p key={post.id}> {post.title}</p>
                ))
            }

        </div>
    )
}

export default FetchApi