import React from 'react'
type Props = {
  imageUrl: string
  desc?: string
  progress?: number
  className: string
  bookSize?: 'sm' | 'default'
}

const Image = ({
  imageUrl,
  desc,
  progress = 1,
  className,
  bookSize = 'default',
}: Props) => {
  return (
    <div
      className={`h-auto rounded-l-xl shadow-xl shadow-primary-dark/30 ${className} border`}
    >
      <img
        src={imageUrl}
        title={`${Math.floor(progress)}% complete`}
        alt={desc}
        className='size-full rounded-l-xl border-r border-primary-dark'
        sizes='(max-width: 600px) 500px, (max-width: 1200px) 1000px, 2000px'
      />
      {bookSize == 'default' ? (
        <div className='rounded-l-xl w-full bg-primary-dark py-1 pl-1'>
          <div className='w-full rounded-l-full bg-white'>
            <div
              className={`rounded-l-full bg-secondary py-1.5`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      ) : (
        <div className='rounded-l-xl w-full bg-primary-dark py-0.5 pl-0.5'>
          <div className='w-full rounded-l-full bg-white'>
            <div
              className={`rounded-l-full bg-secondary py-1`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Image
