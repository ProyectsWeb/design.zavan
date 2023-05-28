import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Menu from './Menu'
import styles from '@/styles/Header.module.css'
import BtnMenuBars from './BtnMenuBars'


export const Header = () => {
   const [menu, setMenu] = useState(false); 
   const viewMenu = () => setMenu(!menu); 
 
  return (
    <div className={styles.header}>
        <div className={styles.container_logo }>
          <Image src="/img/design-zavan13.png"
            width={272}
            height={10}
            alt="Design Zavan Logo"
            className={styles.logo}
          />
        </div>      

       {menu ? <Menu menu={menu}/> : <Menu menu={menu} />} 
          
      {/* <div className={styles.btn_item}>      
        <BtnMenuBars viewMenu={viewMenu} /> 
        <div className={styles.container_busqueda}>
          <i className="fa fa-search" aria-hidden="true"></i>       
        </div>         
      </div> */}

    </div>
  )
}
