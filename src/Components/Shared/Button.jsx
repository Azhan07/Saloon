import {} from 'react'

const Button= ({text}) => {
  return (
   <button className=' rounded-md border-none p-4  bg-red-600  text-white w-[50%] transition ease-in-out delay-150 9t hover:-translate-y-1 hover:scale-110  duration-300'>{text}</button>
  )
}

export default Button