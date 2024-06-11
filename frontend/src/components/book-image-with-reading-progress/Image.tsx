import React from 'react'
type Props = {
  imageUrl: string
  desc?: string
  progress?: number
  className: string
  bookLevel: string
  bookSize?: 'sm' | 'default'
}

const Image = ({
  imageUrl,
  desc,
  progress = 1,
  className,
  bookLevel,
  bookSize = 'default',
}: Props) => {
  return (
    <div
      className={`relative h-auto rounded-l-xl ${
        bookSize == 'default' ? 'shadow-xl' : 'shadow'
      } shadow-primary-dark/30 ${className} border`}
    >
      <img
        src={imageUrl}
        title={`${Math.floor(progress)}% complete`}
        alt={desc}
        className={'size-full rounded-l-xl border-r border-primary-dark '}
        sizes='(max-width: 600px) 500px, (max-width: 1200px) 1000px, 2000px'
      />
      {bookSize == 'default' ? (
        <div className='rounded-l-xl w-full bg-primary-dark py-1 pl-1'>
          <div className='w-full rounded-l-full bg-white'>
            <div
              className={`rounded-l-full bg-primary py-1.5`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      ) : (
        <div className='rounded-l-xl w-full bg-primary-dark py-0.5 pl-0.5'>
          <div className='w-full rounded-l-full bg-white'>
            <div
              className={`rounded-l-full bg-primary py-1`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
      {bookLevel ? (
        <div className='px-1 py-0.5 font-black border border-primary-dark rounded absolute bottom-7 right-2 bg-primary-light text-primary-dark'>
          {bookLevel}
        </div>
      ) : null}
    </div>
  )
}

export default Image
