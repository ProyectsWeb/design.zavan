import React from 'react'
import styles from '@/styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (  
   <footer className={styles.footer} >
    <div className={styles.container_footer}>
         <div className={styles.container_logo_footer}>

         <Image src="/img/design-zavan13.png"            
            width={272}
            height={10}
            className={styles.logo} 
            alt="logo zavan" />  

           <p className={styles.p_footer}>
             Contáctanos hoy para obtener más información sobre cómo podemos ayudarte a alcanzar tus objetivos digitales. 
          </p>  

           <span className={styles.span_footer}>Suscríbete a nuestro boletín</span> 

           <div className={styles.btn_suscribir}>            
              <input  placeholder="Ingresa tu Email" className={styles.input_footer} type="email" />
              <div className={styles.btm_footer}><p>SUSCRIBIRSE</p></div>              
           </div>
       </div>
         
            <div className={styles.enlaces_footer}>
              <h3>Enlaces Utiles</h3>
              <a href="#">Google</a>
              <a href="#">LinkedIn</a>              
            </div>

            <div className={styles.recursos_footer}>
              <h3>Recursos</h3>
              <a href="#">Proyectos</a>
              <a href="https://www.freepik.es/">Imagenes-<br />Diseñado por Freepik </a>
            </div>

            <div className={styles.contacto_footer}>
              <h3>Informacion de Contacto</h3>
              <a href="#">correo@zavan.dev</a>
              <a href="#">Telefono</a>                        
            </div>
    </div>   
  </ footer>
  )
}

export default Footer