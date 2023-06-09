import React from 'react'
import styles from '@/styles/Presentacion.module.css'


const Presentacion = () => {
  return (
    <div>
    <section className={styles.seccion_presentacion_1}>
      <div className={styles.presentacion}>
       
       <h3 className={styles.design}><span>Design</span>Zavan</h3>
       <p className={styles.p_presentacion}>Somos profesionales apasionados por la tecnología enfocados en brindar soluciones digitales de calidad, que ayuden  a nuestros clientes de todos los tamaños a aumentar su presencia en línea, mejorar su eficiencia operativa y aumentar sus ingresos.</p>
      </div>
    </section>

    <section className={styles.seccion_presentacion_2}>
      <div className={styles.presentacion} >
       
       <h3 className={styles.design}><span>Alcanza tus Metas Digitales</span></h3>
       <p className={styles.p_presentacion}>¿En busca de un profesional de desarrollo de páginas y aplicaciones web confiable, precio justo y de excelente calidad? <br /><br /> Contáctanos hoy para obtener más información sobre cómo podemos colaborar a que alcances tus objetivos digitales.</p>
      </div>
    </section>
        
    </div>
  )
}

export default Presentacion