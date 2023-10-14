"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.css"
import Header from "@/component/header/Header"
import Menu from "@/component/menu/Menu"
import Footer from "@/component/footer/Footer"
import { useReducer } from 'react'
import { myReducer } from '@/reducer/appReducer'
import {init} from '@/utils/init'
import { Provider } from '@/context/useContext'

export default function RootLayout({ children }) {
      const [state,dispatch] = useReducer(myReducer,init)
  return (
    <html lang="en">
      <body>
        <Provider value={{state,dispatch}}>
        <Header />
       {state.isLoggedIn && <Menu/>} 
        {children}
        <Footer/>
        </Provider>
      </body>
    </html>
  )
}
