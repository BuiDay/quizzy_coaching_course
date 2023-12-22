'use client'
import './globals.css'
import { Josefin_Sans, Poppins } from 'next/font/google'
import { ThemeProvider } from './utils/theme-provider'
import { Toaster } from 'react-hot-toast'
import { Providers } from './Provider'
import React, { use, useEffect, useState } from 'react'
import { useLoadUserQuery } from '@/redux/features/api/apiSlice'
import Loader from './components/Loader/Loader'
import { Metadata } from 'next'
import LoaderPercent from './components/Common/LoaderPercent'
import Footer from './components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["300","400", "500", "600", "700","900"],
  variable: "--font-Poppins"
})

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ["300","400", "500", "600", "700"],
  variable: "--font-Josefin"
})

// export const metadata: Metadata = {
//   title: 'Quizzy Coaching Course',
//   description:'Kinh nghiệm 2 năm trong lĩnh vực Social Media Marketing, hiện đang là Project Manager tại 1 công ty Canada, từng là Social Media Executive tại Zing News và sỡ hữu hơn 140K followers trên các kênh Social',
//   keywords: ["Quizzy Coaching Course","Marketing","Quizzy"],
//   openGraph: {
//     images: 'https://res.cloudinary.com/dlqieazbj/image/upload/v1697019213/hvaspii98y8iqk3zkp64.jpg',
//   },
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      {/* !bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black */}
      <body className={`${poppins.variable} ${josefin.variable} bg-no-repeat duration-300`}>
        <Providers>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <CustomV1>
              {children}
              <Footer />
            </CustomV1>
            {/* {children} */}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}

// const Custom:React.FC<{children:React.ReactNode}> = ({children}) => {
//     const {isLoading} = useLoadUserQuery({});
//     return (
//       <>
//         {
//           isLoading ? <Loader /> : <>{children}</>
//         }
//       </>
//     )
// }

const CustomV1:React.FC<{children:React.ReactNode}> = ({children}) => {

  const [count, setCount] = useState<number>(0)


  useEffect(()=>{
    const counter = setInterval (() => {
      if(count < 100) {
        setCount((n)=>n +1)
      }
      if(count > 100){
        setCount(100)
      }
    },7)
    return () => {
      clearInterval(counter)
    }
  },[count])

  return (
    <>
      {
        count < 100 ? <LoaderPercent count={count}/> : <>{children}</>
      }
    </>
  )
}