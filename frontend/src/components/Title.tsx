import React from 'react'

type Props = { text: string }

const Title = ({ text }: Props) => {
  return <h2 className='text-'>{text}</h2>
}

export default Title
