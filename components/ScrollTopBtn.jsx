/* import React, { useRef, useState } from 'react'
import styles from '@/styles/ScrollTopBtn.module.css'


const ScrollTopBtn = ({view}) => { 
  const [bagBtn, setBagBtn] = useState(`${styles.rojo}`);
  const btnScroll = useRef();

  return (
    <buttom ref={btnScroll} className={`${styles.scroll_top_btn} ${bagBtn}`} onClick={(e)=>{ subirMenu(e) }}>
      <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
    </buttom>
  )
}

export default ScrollTopBtn */