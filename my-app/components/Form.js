"use client"
import { useState } from "react"


const Form = () => {
    const initial ={
        fname: "",
        email: "",
        phone: "",
        state: "",
        city: ""

    }

    const [formData, setformData] = useState(initial)
    const onSubmit = async (e) => {

        e.preventDefault()
        
        //console.log(formData)

        try {
            const response = await fetch("https://v1.nocodeapi.com/ma9av/google_sheets/EkOjyIMiSatDERQl?tabId=Sheet1",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
            },
            body: JSON.stringify([
                [fname, email , phone, state, city, new Date().toLocaleString()],

            ]),

        }
    )
    await response.json();
    setformData({fname:"",email:"",phone:"",state:"",city:""})
        } catch(err)
        {
            console.log(err)
        }
        

        
        

    }

    const handleChange = (e) => {
        const { name, value} = e.target 
        setformData({...formData,[name]: value})

    }

    const {fname, email, phone, state ,city } = formData

  return (
<div className="mt-5 p-5  flex justify-center">
    <form  id="sheetdb" onSubmit={onSubmit} className=" bg-slate-400 sm:w-2/4 glass">

        <div className="flex flex-col justify-center gap-5 px-10 py-10" >
            <input type="text" name="fname" className=" p-2 rounded-md border-2" placeholder="Enter your name" value={fname} onChange={handleChange}/>

            <input type="email" name="email" className=" p-2 rounded-md border-2" placeholder="Email ID" value={email} onChange={handleChange}/>

            <input type="text" name="phone" pattern="[0-9]+"  className=" p-2 rounded-md border-2" placeholder="Phone" value={phone} onChange={handleChange} />

            <div className="flex flex-row gap-5 ">
                <input type="text" name="state" className="p-2 rounded-md border-2 w-2/4" placeholder="State" value={state}  onChange={handleChange}/>
                <input type="text" name="city" className="p-2 rounded-md border-2 w-2/4" placeholder="City" value={city} onChange={handleChange}/>
            </div>

            <button className="flex bg-black rounded-xl text-white w-2/4 p-2 justify-center text-center m-auto "> Submit </button>   
        </div>
        
    </form>

    


      
</div>
  )
}

export default Form
