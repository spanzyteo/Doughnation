'use client'
import { ReactNode } from "react"
import { Provider } from "react-redux"
import { store } from "../store"
import Navbar from "./Navbar"
import ContactAndFooter from "./ContactAndFooter"
import Sidebar from "./Sidebar"

export default function ClientProvider({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <Provider store={store}>
      <Navbar />
      <Sidebar />
      {children}
      <ContactAndFooter />
    </Provider>
  )
}