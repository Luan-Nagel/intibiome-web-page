import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './Footer.module.css'


const Footer = () => {
  return (
    <footer className={ styles.footer }>
      <div className={ styles.nav }>
        <p>contact us | faq | site map | privacy policy | cookies policy | legal notice</p>
      </div>
      <div className={ styles.imgsContainer }>
        <StaticImage src='../assets/images/Image 1@2x.png' alt='U-labs logo' quality={ 90 } width={ 116 } height={ 29 }/>
        <StaticImage src='../assets/icons/Layer 2.svg' alt='Instagram logo' quality={ 90 } width={ 42.55 } height={ 42.55 }/>
      </div>
    </footer>
  )
}

export default Footer