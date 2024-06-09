import React from 'react'
type Props = {
  imageUrl: string
  desc?: string
  progress?: number
  className: string
}

const Image = ({ imageUrl, desc, progress = 1, className }: Props) => {
  return (
    <div className={`h-auto shadow-xl shadow-primary-dark/30 ${className}`}>
      <img
        src={imageUrl}
        title={`${Math.floor(progress)}% complete`}
        alt={desc}
        className='size-full rounded-tl-xl border-r border-primary-dark'
        sizes='(max-width: 600px) 500px, (max-width: 1200px) 1000px, 2000px'
      />
      <div className='rounded-l-lg w-full bg-primary-dark py-1 pl-1'>
        <div className='w-full rounded-l-full bg-white'>
          <div
            className={`rounded-l-full bg-secondary py-1`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default Image
