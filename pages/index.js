import Layout from '@/components/Layout'
import SeccionMain from '@/components/SeccionMain'
import Presentacion from '@/components/Presentacion'
import SeccionServicios from '@/components/SeccionServicios'
import ItemServicios from '@/components/ItemServicios'
import SeccionEleccion from '@/components/SeccionEleccion'

export default function Home({data}) { 
 
  return (
    <>
      <Layout 
        title= "Inicio | DesignZavan"        
        description = "Descripcion Inicio de mi sitio web"
      >     
      <SeccionMain data={data}/> 
      <Presentacion /> 
      <SeccionServicios /> 
      <ItemServicios /> 
      <SeccionEleccion />
      </Layout>
   </>
  )
}