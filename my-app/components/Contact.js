

const Contact = () => {
  return (
    <> 
  <h1 className="text-center text-2xl pt-20">
    <span className="bg-blue-950 p-2 text-white rounded-2xl">
      Contact us
    </span>
  </h1>
    <div className="flex justify-center">
       
        <div className="flex flex-col-reverse gap-5 pt-10 pb-10 m-auto pr-10 pl-10   sm:flex-row ">
            <div className=" m-auto p-10 flex flex-col gap-5">
                <span className="">Feel free to Contact us regarding any business enquiry</span>
                <div className="flex flex-row text-center gap-3"><img src="gmail.png" width={20}/> nansan@gmail.com</div>
                <div className="flex flex-row text-center gap-3"><img src="phone.png" width={20}/>+917016762821,  +919173388325</div>
                <div className="flex flex-row text-center gap-3"><img src="location.png" width={20}/>Dunetha, Nani Daman 396210</div>

            </div>
              <div className="w-1/2 m-auto">
            <img src="contact.jpg"/>
            </div>

        </div>
   
    </div>
   
    </>
  )
}

export default Contact
