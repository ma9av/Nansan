import localFont from 'next/font/local'

const myFont = localFont({src:'../fonts/Horizon.ttf'})



const Headline = () => {
  


  return (
    <div className={myFont.className}>
    <div className="text-center justify-center bg-blue-900 m-auto font-bold text-xl text-white"  name="header">

        <span className=""> NANSAN manpower solutions </span>
      
    </div>
    </div>
    
  )
}

export default Headline
