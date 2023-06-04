import React from 'react'
import Image from 'next/image'
import styles from '@/styles/SeccionMain.module.css'


import RedesSociales from '@/components/RedesSociales'

const SeccionMain = () => {

  return (
    <section className={styles.seccion_main}>
     <div className={styles.titulos_main}>

      <RedesSociales />      
      <h1 className={styles.h1_main}>Brindando servicios y soluciones Especializadas</h1>    
      <p className={styles.parrafo_main}>
        Desarrollo web a medida. Creamos soluciones digitales únicas para tu negocio.        
      </p>
      <div className={styles.btn_main}><p className={styles.parrafo_start}>Iniciar Ahora</p></div>

     </div>

    <div className={styles.container_img_main}>
     <Image src="/img/illustration-5.webp" 
     width={400}
     height={200}
     priority      
     className={styles.imagen_main}
     alt="presentacion zavan" /> 
    </div>

  </section>
  )
}

export default SeccionMain