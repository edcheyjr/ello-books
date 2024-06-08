import React from 'react'
import Logo from '../Logo'
import Profile from '../Profile'
import Title from '../Title'

const Nav = () => {
  return (
    <nav className='w-full flex justify-between items-center'>
      <Logo />
      <div className=''>
        {/* Center */}
        <Title>Reading list</Title>
      </div>
      <div className='space-x-1 flex items-center'>
        {/* Right side */}
        <Profile />
      </div>
    </nav>
  )
}

export default Nav
