import React from 'react'

const ListItems = () => {

    const list = ["hi", "hello", "ki"];
    return (
        <div>
            {list.map((item, idx) => (
                <p key={idx}>{item}</p>
            ))}
        </div>
    )
}

export default ListItems