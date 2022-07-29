import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './index.module.css'
import useWindowSize from "../hooks/useWindowSize"
import Layout from "../components/Layout/Layout"

const IndexPage = () => {

  const { width } = useWindowSize()
  const isMobile = width < 600

  const sliderSettings = {
    centerMode: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: width < 950 ? width < 750 ? 1 : 2 : 3
  }

  return (
    <Layout>
      <main>
        <section className={ styles.section }>
          <h2 className={ styles.sectionTitle }>we're here to help</h2>
          <div className={ styles.sectionText }>
            <p>
              When it comes to caring for our most intimate areas, we’ve lost our connection.
            </p>
            <p>
              Embarrassed, unwilling, or unable to communicate with others, we’re needlessly neglecting 
              the parts of our bodies that need it most.
            </p>
            <p>
              We’re here to help. Providing you with the expertise, knowledge and products you need to 
              feel confident in your personal care.
            </p>
          </div>
          <StaticImage src='../assets/icons/icons.png' alt='icones' quality={ 90 } />
        </section>
        <section className={ styles.section }>
          <h2 className={ styles.sectionTitle }>whatever your age. whatever your lifestyle. whatever your interests.</h2>
          <div className={ styles.sectionTextLg }>
            <p>
              Co-created with gynaecologists, our revolutionary products have been expertly developed to 
              support your intimate microbiome and pH balance, and strengthen overall natural health.
            </p>
            <p>
              As the experts in intimate hygiene, we want to bring discussion about intimate wellness care 
              out of the dark and demystify the taboos that surround it.
            </p>
          </div>
        </section>
        <section className={ styles.sliderProducts }>
          <h2 className={ styles.sectionTitle }>our products</h2>
          <Slider {...sliderSettings}>
            <div className={ styles.cardContainer }>
              <div className={ styles.card }>
                <StaticImage src='../assets/images/prod-wellness.png' alt='Agecare' quality={ 90 }/>
                <div className={ styles.productDescription }>
                  <p>intibiome wellness daily intimate wash</p>
                </div>
                <div className={ styles.wellness }>
                  <p>wellness</p>
                </div>
              </div>
            </div>
            <div className={ styles.cardContainer }>
              <div className={ styles.card }>
                <StaticImage src='../assets/images/prod-active.png' alt='Agecare' quality={ 90 }/>
                <div className={ styles.productDescription }>
                  <p>intibiome active extra protection intimate wash</p>
                </div>
                <div className={ styles.active }>
                  <p>active</p>
                </div>
              </div>
            </div>
            <div className={ styles.cardContainer }>
              <div className={ styles.card }>
                <StaticImage src='../assets/images/prod-agecare.png' alt='Agecare' quality={ 90 } />
                <div className={ styles.productDescription }>
                  <p>intibiome agecare dryness relief intimate wash</p>
                </div>
                <div className={ styles.agecare }>
                  <p>agecare</p>
                </div>
              </div>
            </div>
          </Slider>
        </section>
        <section style={{ marginTop: '80px' }}>
          { !isMobile && <StaticImage src='../assets/images/banner-products.png' alt='Products banner' quality={ 90 }/> }
          { isMobile && <StaticImage src='../assets/images/banner-products-mobile.png' alt='Products banner' quality={ 90 }/>}
        </section>
        <section className={ styles.sliderArticles }>
          <h2 className={ styles.sectionTitle }>keep up to date with our discoveries</h2>
          <Slider {...sliderSettings}>
            <div className={ styles.cardContainer }>
              <div className={ styles.card }>
                <StaticImage src='../assets/images/article1.png' 
                  alt='Woman wearing sportswear and laughing' quality={ 90 }
                />
                <div className={ styles.articleDescription }>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className={ styles.cardContainer }>
              <div className={ styles.card }>
                <StaticImage src='../assets/images/article2.png' 
                  alt='Middle aged woman smiling' quality={ 90 }
                />
                <div className={ styles.articleDescription }>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className={ styles.cardContainer }>
              <div className={ styles.card }>
                <StaticImage src='../assets/images/article3.png' 
                  alt='Lorem ipsum dolor sit amet' quality={ 90 }
                />
                <div className={ styles.articleDescription }>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </Slider>
          <button className={ styles.button }>see more</button>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage