import React from 'react'
import './Header.css'
const Header = (props) => {
  return (
    <div className='header'>
    <header>{props.title}</header>
    </div>
  )
}

export default Header