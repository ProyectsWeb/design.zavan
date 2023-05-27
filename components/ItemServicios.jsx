import React from 'react'
import styles from '@/styles/ItemServicios.module.css'


const ItemServicios = () => {

  return (
    <main className={styles.item_servicios}>
      <div className={styles.container_servicios}>
        <div className={styles.box_servicio}>
          <i className="fa fa-file-code-o" aria-hidden="true"></i>
          <h3>Diseño y desarrollo de sitios web </h3>(Estaticos y Dinamicos)
          <p className={styles.p_descripcion}>
          Creamos sitios web atractivos y funcionales que se adapten a las necesidades específicas de tu negocio o proyecto.
          </p>

          <div className={styles.link_read}>
          <a href="vistas/desarrollo.php">Leer Mas  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>


        <div className={styles.box_servicio}>       
          <i className="fa fa-mobile" aria-hidden="true"></i>
          <h3>Desarrollo de aplicaciones móviles </h3>(PWA)
          <p className={styles.p_descripcion}>
          Creamos aplicaciones para dispositivos móviles que permitan a tus clientes acceder a tu negocio desde cualquier lugar.               
          </p>

          <div className={styles.link_read}>
          <a href=">vistas/app-moviles.php">Leer Mas  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>


        <div className={styles.box_servicio}>
          <i className="fa fa-search" aria-hidden="true"></i>
          <h3>Optimización de motores de búsqueda </h3>(SEO)
          <p className={styles.p_descripcion}>
          Optimizamos tu sitio web para mejorar su visibilidad en los resultados de búsqueda en línea.
          </p>

          <div className={styles.link_read}>
          <a href="vistas/app-seo.php">Leer Mas  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>


        <div className={styles.box_servicio}>
          <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
          <h3>Desarrollo de comercio electrónico</h3>
          <p className={styles.p_descripcion}>
          Construimos tiendas y plataformas de comercio electrónico para que puedas vender productos y servicios en línea.
          </p>

          <div className={styles.link_read}>
          <a href="vistas/ecommerce.php">Leer Mas  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>

        <div className={styles.box_servicio}>
          <i className="fa fa-code" aria-hidden="true"></i>
          <h3>Desarrollo de software personalizado</h3>
          <p className={styles.p_descripcion}>
          Creamos soluciones de software personalizadas para satisfacer las necesidades específicas de tu negocio.
          </p>

          <div className={styles.link_read}>
          <a href="vistas/custom-soft.php">Leer Mas  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>


        <div className={styles.box_servicio}>
          <i className="fa fa-cogs" aria-hidden="true"></i>
          <h3>Mantenimiento y soporte de sitios web y aplicaciones</h3>
          <p className={styles.p_descripcion}>
          Proporcionamos servicios de mantenimiento y soporte continuos para asegurarse de que los sitios web y aplicaciones sigan funcionando sin problemas.
          </p>

          <div className={styles.link_read}>
          <a href="vistas/main-support.php">Leer Mas  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div> 
        </div> 

        </div>
    </main>  
  )
}

export default ItemServicios