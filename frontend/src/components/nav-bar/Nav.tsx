import React from 'react'
import Logo from '../Logo'
import SearchInput from '../search-input/SearchInput'
import Profile from '../Profile'

const Nav = () => {
  return (
    <nav className='w-full flex justify-between items-center'>
      <Logo />
      <div className=''>{/* Center */}</div>
      <div className='space-x-1 flex items-center'>
        {/* Right side */}
        <Profile />
      </div>
    </nav>
  )
}

export default Nav
