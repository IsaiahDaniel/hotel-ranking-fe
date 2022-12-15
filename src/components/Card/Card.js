import React from 'react';

const Card = ({ children }) => {
  return (
    <div className='rounded-lg bg-white shadow-2xl p-3'>
        { children }
    </div>
  )
}

export default Card;