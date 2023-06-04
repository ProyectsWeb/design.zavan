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
        title= "DesignZavan"        
        description = "En DesignZavan ofrecemos servicios óptimos de desarrollo digital, para ayudar a que tú negocio o proyecto tenga mejor presencia en línea y así aumentar tus posibilidades de alcanzar tus objetivos."
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