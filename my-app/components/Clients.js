import Image from 'next/image'
const Clients = () => {
  return (
    <div className=" text-2xl pl-10 pr-10">
        <h1 className=" text-center mt-10"><span className='bg-blue-950 p-2 text-white rounded-2xl'>  Our Clients </span></h1>

        <div className='pt-10'>
        <div className='flex  justify-center pt-5 md:flex-row md:p-10 horizontal'>
            <Image src={"/clients/edutest.png"} width={200} height={200} alt='' className='p-5'/>
            <Image src={"/clients/NTA.png"} width={300} height={200} alt='' className='p-5'/>
            <Image src={"/clients/asquare.webp"} width={200} height={50} alt='' className='p-5'/>
        </div>
        <div className='flex justify-center gap-40 pt-5 p-10'>

            <Image src={"/clients/ITC.png"} width={200} height={200} alt=''/>
            <Image src={"/clients/innovatiview.png"} width={300} height={200} alt=''/>
            
        </div>
        </div>
      
    </div>
  )
}

export default Clients
