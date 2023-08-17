import React from 'react';

const getStyleName = btn => {
    const className = {
        '=': 'equals',
        'x': 'opt',
        '-': 'opt',
        '+': 'opt',
        '/': 'opt',
    }
    return className [btn]
}

const Button = ({ value }) => {
  return (
    <button className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button;