import Link from 'next/link'

const Dropdown = () => {
  return (
    <div className="flex  p-10 bg-blue-50 rounded-md right-2 opacity-70 absolute">
        <ul className="flex flex-col gap-5 font-bold">
        <Link href="#home" className=' text-blue-950  font-bold hover:text-blue-400'> Home </Link>
       <Link href="#about-us" className=' text-blue-950  font-bold hover:text-blue-400'>About us</Link>
       <Link href="#clients" className=' text-blue-950  font-bold hover:text-blue-400'>Clients</Link>
       <Link href="#career" className=' text-blue-950  font-bold hover:text-blue-400'>Career</Link>
       <Link href="#service" className=' text-blue-950  font-bold hover:text-blue-400'>Services</Link>

        </ul>
      
    </div>
  )
}

export default Dropdown
