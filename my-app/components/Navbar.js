import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <header className='pt-3 pl-5 flex flex-row hd hide '>
      <ul className=' flex flex-row gap-7 text-xl'>
       <Link href="#home" className=' text-blue-950  font-bold hover:text-blue-400'> Home </Link>
       <Link href="#about-us" className=' text-blue-950  font-bold hover:text-blue-400'>About us</Link>
       <Link href="#clients" className=' text-blue-950  font-bold hover:text-blue-400'>Clients</Link>
       <Link href="#career" className=' text-blue-950  font-bold hover:text-blue-400'>Career</Link>
       <Link href="#service" className=' text-blue-950  font-bold hover:text-blue-400'>Services</Link>
       
       
      </ul>
     <Image src="/nansan.png" width={160} height={120} alt= "nansan" className='ml-auto pr-5' />


    </header>
  )
}

export default Navbar
