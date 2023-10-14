"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Home from './home/page'
import Login from './login/page'
import { useContext } from 'react'
import { ctx } from '@/context/useContext'
import { myReducer } from '@/reducer/appReducer'

export default function Page() {
  const {state} = useContext(ctx)
  return (
    <div>
     {state.isLoggedIn ? <Home/>:<Login/>}    
    </div>
  
  )
}
