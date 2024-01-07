
import './globals.css'
import { Inter} from 'next/font/google'


const inter = Inter({
  subsets:['latin']
})



export const metadata = {
  title: 'NANSAN ',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=' bg-blue-50 '>
      <body className={inter.className} >
        
      {children}
    
      </body>
    
     
    </html>
  )
}
