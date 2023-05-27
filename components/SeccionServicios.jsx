import React from 'react'
import styles from '@/styles/SeccionServicios.module.css'


const SeccionServicios = () => {
  return (
    <section className={styles.seccion_servicios} id='servicios'>
      <div className={styles.box_servicios}>
       <span className={styles.span_servicios}>Servicios</span>
        <h2 className={styles.h2_servicios}>Servicios que ofrecemos</h2>
        <p className={styles.parrafo_servicios}>
         En <span className={styles.design}>Design</span><span className={styles.zavan}>Zavan</span> ofrecemos servicios óptimos de desarrollo digital, para ayudar a que tú negocio o proyecto tenga mejor presencia en línea y así aumentar tus posibilidades de alcanzar tus objetivos.
        </p>
     </div>
      
     <div className={styles.btn_servicios}><p className={styles.parrafo_start}>Ver todos los Servicios</p></div>
    </section>
  )
}

export default SeccionServicios