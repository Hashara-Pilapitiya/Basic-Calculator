import React, { useContext } from 'react';
import { CalContext } from '../context/CalContext';


const Screen = () => {
  const { clac } = useContext(CalContext);

  return (
    <div className='screen'>03456</div>
  )
}

export default Screen;