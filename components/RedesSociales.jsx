import React from 'react'
import styles from '@/styles/RedesSociales.module.css'

const RedesSociales = () => {
  return (

    <div className={styles.redes_sociales}>	
			<ul>				
        	<li>
			  <a href="https://www.facebook.com/Zavan-105553928241197/about/?ref=page_internal" target="_blank">
				<i className="fa fa-facebook"></i>
			  </a>
			</li>
			<li>
				<a href="https://www.youtube.com/channel/UCcebSrheJPNJkdMeeRJsazA" target="_blank">				
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
				</a>
			</li>

            <li>
				<a href="http://instagram.com/" target="_blank">
					<i className="fa fa-instagram"></i>
				</a>
			</li>

			<li>
			    <a href="http://twitter.com/" target="_blank">
			        <i className="fa fa-twitter"></i>
			    </a>
			</li>			
		</ul>
	</div>		
    
  )
}

export default RedesSociales