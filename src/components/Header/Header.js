import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <div className={ styles.imgsContainer }>
        <StaticImage src='../assets/icons/ic.menu.svg' alt='Mobile menu icon'
          quality={ 90 } width={ 24 } height={ 24 }
        />
        <StaticImage src='../assets/images/Module 1 - Header 970x60025@2x.png' alt='Intibiome logo'
          quality={ 90 } width={ 195 } height={ 79 }
        />
        <StaticImage src='../assets/icons/ic.search.svg' alt='Search icon'
          quality={ 90 } width={ 24 } height={ 24 }
        />
      </div>
      <div className={ styles.nav }>
        <p className={ styles.navItem } >about us v</p>
        <p className={ styles.navItem } >our products v</p>
        <p className={ styles.navItem } >intimate health v</p>
        <p className={ styles.navItem } >contact us</p>
      </div>
      <StaticImage src='../assets/images/banner-hero@2x.png' alt='banner'
        quality={ 90 } height={ 550 }
      />
    </header>
  )
}

export default Header