import React from 'react'
import Down from '../icons/Down'
// type Props = {}

const UserIcon = () => {
  // TODO ADD DROPDOWN TO SELECT BETWEEN TEACHER AND STUDENT
  return (
    <button
      className='h-16 p-1 flex space-x-1 rounded-full items-center justify-center group'
      onClick={() => console.log('Todo')}
    >
      <Down className='size-4 text-primary-dark' />
      <img
        src='../../assets/ello_elephant.png'
        alt='user'
        className='h-full group-hover:rotate-2 -rotate-1 duration-200 ease-in-out'
      />
    </button>
  )
}

export default UserIcon
