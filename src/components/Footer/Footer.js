import React, { Fragment } from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { FOOTER_NAV } from '../../constants/footer'
import useWindowSize from "../../hooks/useWindowSize"
import * as styles from './Footer.module.css'


const Footer = () => {

  const { width } = useWindowSize()
  const isMobile = width < 650

  return (
    <footer className={ styles.footer }>
      <div className={ styles.nav }>
        { FOOTER_NAV.map((item, index) => (
          <Fragment key={ item.key }>
            <span>{ item.label }</span>
            { index < FOOTER_NAV.length-1 && 
              <div style={{ width: isMobile ? '24px' : '2px', height: isMobile ? '2px' : '24px', backgroundColor: '#fff' }} />
            }
          </Fragment>
        )) }
      </div>
      <div className={ styles.imgsContainer }>
        <StaticImage src='../../assets/images/u-labs-logo.png' alt='U-labs logo' quality={ 90 } width={ 116 } height={ 29 }/>
        <StaticImage src='../../assets/icons/ic-intagram.svg' alt='Instagram logo' quality={ 90 } width={ 42.55 } height={ 42.55 }/>
      </div>
    </footer>
  )
}

export default Footer