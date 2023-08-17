import React, { useContext } from 'react';
import { CalContext } from '../context/CalContext';
import { Textfit } from 'react-textfit';


const Screen = () => {
  const { calc } = useContext(CalContext);

  return (
    <Textfit className='screen' max={70} mode='single'>{calc.num ? calc.num : calc.res}</Textfit>
  )
}

export default Screen;