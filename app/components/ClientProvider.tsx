'use client'
import { ReactNode, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import Navbar from './Navbar'
import ContactAndFooter from './ContactAndFooter'
import Sidebar from './Sidebar'
import { ThreeCircles } from 'react-loader-spinner'

export default function ClientProvider({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setLoader(true)
  }, [])
  if (!loader) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#674DF0"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    )
  }
  return (
    <Provider store={store}>
      <Navbar />
      <Sidebar />
      {children}
      <ContactAndFooter />
    </Provider>
  )
}
