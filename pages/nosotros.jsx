import Layout from '@/components/Layout'
import React, { useRef } from 'react'

const Nosotros = () => {
  const seccMain = useRef();
  return (
    <Layout 
      title= "Nosotros | mi sitio web"
      description = "Descripcion Nosotros de mi sitio web"
    >

    <main ref={seccMain}>
        <h2>Nosotros</h2>      
    </main>
    </Layout>
  )
}

export default Nosotros