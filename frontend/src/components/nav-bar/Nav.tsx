import React from 'react'
import Logo from '../Logo'
import SearchInput from '../SearchInput'
import Profile from '../Profile'

const Nav = () => {
  return (
    <nav className='w-full py-4 flex justify-between items-center'>
      <Logo />
      <div className='space-x-1 flex items-center'>
        {/* Right side */}
        <SearchInput />
        <Profile />
      </div>
    </nav>
  )
}

export default Nav
