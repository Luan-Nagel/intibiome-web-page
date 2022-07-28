import React, { useState } from "react"
import * as styles from './Header.module.css'
import useWindowSize from "../../hooks/useWindowSize"
import intibiomeLogo from '../../assets/images/intibiome-logo.png'
import menuIcon from '../../assets/icons/ic-menu.svg'
import searchIcon from '../../assets/icons/ic-search.svg'
import angleDownIcon from '../../assets/icons/angle-down-solid.svg'
import closeIcon from '../../assets/icons/xmark-solid.svg'
import bannerDesktop from '../../assets/images/banner-hero@2x.png'
import bannerMobile from '../../assets/images/banner-intibiome-02@2x.png'
import { NAVIGATION_ITEMS } from '../../constants/indexPage'

const Header = () => {

  const { width } = useWindowSize()
  const isMobile = width < 600

  const [options, setOptions] = useState(null)

  const handleMouseHover = navItem => () => {
    if (navItem) setOptions(NAVIGATION_ITEMS[navItem])
    else setOptions(null)
  }

  const handleMenuClick = () => {
    if (!options) {
      let allOptions = []
      Object.values(NAVIGATION_ITEMS).forEach(el => allOptions = [...allOptions, ...el])
      allOptions.push({ key: 'contact-us', label: 'contact us' })
      setOptions(allOptions)
    } else {
      setOptions(null)
    }
  }

  return (
    <header >
      <div className={ styles.imgsContainer }>
        <div style={{ width: '24px' }}>
          { isMobile && <img src={ options ? closeIcon : menuIcon } alt='Mobile menu icon' 
            onClick={ handleMenuClick }
          /> }
        </div>
        <img src={ intibiomeLogo } width={ isMobile ? 143 : 195 } height={ isMobile ? 58 : 79 } alt='kk' />
        <img src={ searchIcon } alt='Search icon' />
      </div>
      { !isMobile && <div style={{ position: 'relative' }} onMouseLeave={ handleMouseHover() }>
        <div className={ styles.navContainer }>
          <div className={ styles.nav }>
            <span className={ styles.navItem } role='presentation' onMouseEnter={ handleMouseHover('about') }>
              about us <img className={ styles.angleDownIcon } src={ angleDownIcon } alt='Angle down icon'/>
            </span>
            <span className={ styles.navItem } role='presentation' onMouseEnter={ handleMouseHover('products') }>
              our products <img className={ styles.angleDownIcon } src={ angleDownIcon } alt='Angle down icon'/>
            </span>
            <span className={ styles.navItem } role='presentation' onMouseEnter={ handleMouseHover('health') }>
              intimate health <img className={ styles.angleDownIcon } src={ angleDownIcon } alt='Angle down icon'/>
            </span>
            <span className={ styles.navItem }>contact us</span>
          </div>
        </div>
        { options && <div className={ styles.optionsContainer } style={{ position: 'absolute' }}>
          { options.map(item => (
            <span className={ styles.option } key={ item.key }>{ item.label }</span>
          )) }
        </div> }
      </div> }
      { isMobile && options && <div className={ styles.navContainerMobile }>
        { options.map(item => (
          <span className={ styles.option } key={ item.key }>{ item.label }</span>
        )) }
      </div> }
      { !isMobile && <img src={ bannerDesktop } alt='Banner hero' width='100%' /> }
      { isMobile && <img src={ bannerMobile } alt='Banner mobile' width='100%' /> }
    </header>
  )
}

export default Header