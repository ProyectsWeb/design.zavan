import React from 'react'
import Image from 'next/image'

import styles from '@/styles/SeccionEleccion.module.css'

const SeccionEleccion = () => {
  return (
    <section className={styles.eleccion}>

        <div className={styles.container_logo}>
          <Image src={"/img/illustration-4.webp"} 
            width={200}
            height={200}
            className={styles.img_eleccion} 
            alt="elegir zavan design" />
          <a className={styles.freepik} target="_blank" href="https://www.freepik.es/vector-gratis/desarrollo-web-ingenieria-programadores-sitio-web-codificacion-pantallas-interfaz-realidad-aumentada-desarrollador-ingeniero-proyectos-software-programacion-o-diseno-aplicaciones-ilustracion-dibujos-animados_10798281.htm#query=diseno%20web&position=7&from_view=keyword&track=ais">Imagen de upklyak en Freepik</a> 
          <div className={styles.btn_contacto}><p className={styles.parrafo_contacto}>Contactenos</p></div>
        </div>

        <div className={styles.container_eleccion}>
          <span className={styles.span_elejir}>Porque Elegirnos</span>
          <h2 className={styles.h2_elejir}>Por qué nuestros clientes eligen trabajar con nosotros</h2>
          <p className={styles.p_elejir}>
          En un mundo cada vez más conectado, sabemos la importancia que tienen las aplicaciones y páginas web para el éxito de cualquier empresa o proyecto. Por eso, nos comprometemos a trabajar de la mano con nuestros clientes para entender sus necesidades y crear soluciones personalizadas que se adapten a sus objetivos y presupuesto.
          </p>
          
          <div className={styles.info_item}>
           <span className={styles.span_info_item}>01.</span>
            <div className={styles.container_info}>
              <h5 className={styles.h5_info_item}>Últimas tecnologías</h5>
              <p className={styles.p_info_item}>
              El uso de las últimas tecnologías para desarrollar aplicaciones y páginas web para empresas o negocios puede ser una gran ventaja competitiva en el mercado actual. 
              </p>
            </div>
          </div>


          <div className={styles.info_item}>
           <span className={styles.span_info_item}>02.</span>
            <div className={styles.container_info}>
              <h5 className={styles.h5_info_item}>Soluciones Únicas</h5>
              <p className={styles.p_info_item}>
              Nos especializamos en el diseño y desarrollo de aplicaciones móviles y web, e-commerce con soluciones tecnológicas personalizadas y de software a medida.
              </p>
            </div>
          </div>

          <div className={styles.info_item}>
           <span className={styles.span_info_item}>03.</span>
            <div className={styles.container_info}>
              <h5 className={styles.h5_info_item}>Estrategias y Diseños Poderosos</h5>
              <p className={styles.p_info_item}>
              Una aplicación o página web bien desarrollada puede atraer más tráfico y clientes potenciales a tu empresa o negocio, mejorar la imagen de marca y aumentar tu reputación en línea.
              </p>
            </div>
          </div>
          
          <a href="#" className={styles.btn_saber_mas}>Ver mas</a>
        </div>
          
      </section>
  )
}

export default SeccionEleccion