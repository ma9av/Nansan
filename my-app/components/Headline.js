import localFont from 'next/font/local'

const myFont = localFont({src:'../fonts/UbuntuMono-B.ttf'})



const Headline = () => {
  


  return (
    <div className={myFont.className}>
    <div className="text-center justify-center bg-blue-900 m-auto font-bold text-xl text-white"  name="header">

        <span className=""> NANSAN MANPOWER SOLUTIONS </span>
      
    </div>
    </div>
    
  )
}

export default Headline
