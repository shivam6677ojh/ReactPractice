import React from 'react'

import { useLocation, useSearchParams } from 'react-router-dom'

const Profile = () => {

  // const [searchPrams] = useSearchParams();

  // const id = searchPrams.get('id');
  // const name = searchPrams.get('name');

  const {state} = useLocation();


  return (
    // <div>
    //   <h2>
    //     Profile
    //   </h2>
    //   <h2>Id: {id}</h2>
    //   <h2>Name: {name}</h2>
    // </div>
    <div>
      <h2>Profile</h2>
      <p>ID: {state?.userId}</p>
      <p>Name: {state?.name}</p>
    </div>
  )
}

export default Profile