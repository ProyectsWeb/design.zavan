import React, { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import Head from 'next/head'

import styles from '@/styles/Layout.module.css'
import { Header } from './Header'
import Footer from './Footer'
import TermiPolitica from './TermiPolitica'
import Image from 'next/image'


const Layout = ({children, title, description}) => { 

  const [bagBtn, setBagBtn] = useState(`${styles.hidden}`);  
  const seccMain = useRef();
  const btnScroll = useRef();     
  
  useEffect(()=>{  
    const handleScroll = (e )=>{   
    const seccPrimera = seccMain.current;     
    const {y} = seccPrimera.getBoundingClientRect();   
       
    setBagBtn('');
     y >= (-500) ? setBagBtn(`${styles.hidden}`): setBagBtn('');           
    } 
  window.addEventListener('scroll',  handleScroll );   
}, [bagBtn]);

function subirMenu(e){  
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  }); 
}


  return (
    <div className={styles.container}> 
     <Head>        
        <meta name="keywords" content="Diseño web, Desarrollo web, Aplicaciones, Paginas web" />   
        <meta name="description" content={description} />
        <meta name="author" content="Jorge Peraza - DesignZavan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property='og:image' content="https://design-zavan.vercel.app/img/design-zavan13.png" />
        <link rel="icon" href="/dz-zavan.ico" />            
        <title>{title}</title>
     </Head> 
    <Image src={'/img/collage-fondo-programacion.jpg'}
      width={500}
      height={500}
      className={styles.img_fondo}
      alt='imagen de fondo programacion'
    />
     <Header />     

      <main ref={seccMain}>
       {children}
      </main>

     <Footer />    

    {/* <buttom ref={btnScroll} className={`${styles.scroll_top_btn} ${bagBtn}`} onClick={(e)=>{ subirMenu(e) }}>
      <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
    </buttom> */}
    <TermiPolitica />
    <Script src="https://use.fontawesome.com/79d2d8e64e.js" />
    </div>
  )
}

export default Layout

/* Layout.defaultProps = {
    title: "Next.js | mi sitio web",
    description: "Descripcion de mi sitio web"
} */


