import React from 'react'

const Footer = ({length}) => {
    const Year=new Date();
  return (
    <div className='header'>
     <footer>Length of List:{length}</footer>
    </div>
  )
}

export default Footer