import './globals.css'
import { Josefin_Sans, Poppins } from 'next/font/google'
import { ThemeProvider } from './utils/theme-provider'
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["400","500","600","700"],
  variable:"--font-Poppins"
})

const josefin = Josefin_Sans({ 
  subsets: ['latin'],
  weight: ["400","500","600","700"],
  variable:"--font-Josefin"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={`${poppins.variable} ${josefin.variable} bg-no-repeat !bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <Toaster position='top-center' reverseOrder={false}/>
        </ThemeProvider>
      </body>
    </html>
  )
}
