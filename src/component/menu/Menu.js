import React, { Fragment, useEffect, useRef, useState } from 'react';
import styles from './menu.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Menu = () => {
  const [isMobilleView,SetIsMoblieView] = useState(document.body.offsetWidth < 800 ? true : false)
  const [left,setLeft] = useState(-130)
  const [menuItemActive,setMenuItemActive] = useState(usePathname().slice(1)|| 'home')
  // const [menuItemActive,setMenuItemActive] = useState(window.location.pathname.slice(1)|| 'home')
  const fnbtnClick=()=>{
    setLeft(left==0 ? -130 : 0)
  }
  const fnMenuItemclk=(eve)=>{
        eve.stopPropagation;
         setMenuItemActive(eve.target.id)
        if(isMobilleView){
          setLeft(-130)
        }
  }
  const refObj = useRef();
        const findWidth=()=>{
          SetIsMoblieView(document.body.offsetWidth < 800 ? true : false)
        }
  const fnResize=()=>{
    window.addEventListener("resize",()=>{
      if(!refObj.timeOutId){
        findWidth()
      }
      clearTimeout(refObj.timeOutId)
      refObj.timeOutId = setTimeout(()=>{
        findWidth()
      },500)
    })
  }
   useEffect(()=>{
    fnResize()
   },[])
  return (
    <Fragment>
     {isMobilleView && <button onClick={fnbtnClick} className={styles.mobileViewbtn}><span></span><span></span><span></span><span></span></button>}
      <ul onClick={fnMenuItemclk} style={{left:left}} className={`${isMobilleView ? styles.mobileMenu : styles.menu}`}>
        <li><Link id="home" className={`${menuItemActive=='home' && styles.menuActive}`} href="/home">Home</Link></li>
        <li><Link id="user" className={`${menuItemActive=='user' && styles.menuActive}`} href="/users">Users</Link></li>
        <li><Link id="profile" className={`${menuItemActive=='profile' && styles.menuActive}`} href="/profile">Profile</Link></li>
        <li><Link id="login" className={`${menuItemActive=='login' && styles.menuActive}`} href="">Logout</Link></li>
      </ul> 
    </Fragment>
  );
}

export default Menu;
