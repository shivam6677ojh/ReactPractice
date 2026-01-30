import React from 'react'
import { Link } from 'react-router-dom'
import User from './user'

const Home = () => {
  return (
    <div className='flex w-full h-screen bg-black text-white flex-col items-center justify-center gap-4'>
      Go to <br>
      </br>
      {/* <Link to="/profile?id=5&name=5">Profile</Link> */}

      {/* // we can pass non url data using params */}
      <Link to="/profile" state={{userId: 5, name: "John" }}>Profile</Link>
      <Link to="/user?name=shivam">user</Link>
    </div>
  )
}

export default Home