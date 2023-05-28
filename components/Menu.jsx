import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Menu.module.css'

function Menu({menu})  { 
  const [menuY, setMenuY] = useState(`${styles.menu}`); 
  const menuH = () => setMenuY(`${styles.hidden}`);
  const menuVer = () => setMenuY(`${styles.menu_vertical}`);  

  console.log(menu)
  useEffect((e)=>{
    function cambiarPantalla(e){ 
      e.currentTarget.outerWidth <= 900 ?  menuVer() : menuH();            
    }

    !menu ? menuH() : menuVer();  
    window.addEventListener('resize', cambiarPantalla );
  },[menu]);  

  return (
   /*  <nav  className={`${styles.menu} ${menuY}`}> */
    <nav  className={`${styles.menu}`}>
      <Link className={styles.link_menu} href="/">Inicio</Link>
      <Link className={styles.link_menu} href="/nosotros">Nosotros</Link>
      <Link className={styles.link_menu} href="/#servicios">Servicios</Link>
      <Link className={styles.link_menu} href="/portafolio">Portafolio</Link>
      <Link className={styles.link_menu} href="/contacto">Contacto</Link>
    </nav>
  )
}

export default Menu