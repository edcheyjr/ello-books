type Props = { children: string }

const Title = ({ children }: Props) => {
  return (
    <h2 className='text-lg md:text-2xl lg:text-3xl font-bold tracking-wide'>
      {children}
    </h2>
  )
}

export default Title
