import React, { useContext } from 'react';
import { CalContext } from '../context/CalContext';


const Screen = () => {
  const { clac } = useContext(CalContext);

  return (
    <div className='screen'><h1>0</h1></div>
  )
}

export default Screen;