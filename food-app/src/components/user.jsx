import React from 'react'
import { useSearchParams } from 'react-router-dom';

const User = () => {

  const [searchPrams] = useSearchParams();

  const name = searchPrams.get('name');

  return (
    <div>
      <h1 className='bg-red-500'>{name}</h1>
    </div>
  )
}

export default User