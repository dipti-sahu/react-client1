import React from 'react';
import styles from './menu.module.css'
import Link from 'next/link'

const Menu = () => {
  return (
    <div>
      <ul className={styles.menu}>
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/profile">Profile</Link></li>
        <li><Link href="">Logout</Link></li>
      </ul> 
    </div>
  );
}

export default Menu;
