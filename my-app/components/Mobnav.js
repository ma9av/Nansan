"use client"
import Image from "next/image";
import { useState , useRef, useEffect } from "react";
import Dropdown from "./Dropdown";

const Mobnav = () => {
    const [open, setOpen] = useState(false)
    
    const outsideClick =(callback)=>{
        const ref = useRef()

        useEffect(()=>{
            const handleClick = (e)=>{
                if(ref.current && !ref.current.contains(e.target))
                callback()
            }

            document.addEventListener("click", handleClick)

            return ()=> document.removeEventListener("click", handleClick)
        },[])
        return ref
    }

    const myRef = outsideClick(()=> setOpen(false))

    

   
    return (
        <>
    <div className="md:hidden flex hd ">

    <div className="flex pl-5">
       <Image src="/nansan.png" width={160} height={120} alt= "nansan" className='' />
      
       </div>
       <Image src="/menu.svg" ref={myRef} width={60} height={60} alt= "menu" className='ml-auto pr-5' onClick={()=>{
        setOpen(!open);
       }} />


    </div>
    {open && <Dropdown />}
    </>
  )
}

export default Mobnav
