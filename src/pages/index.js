import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './index.module.css'
import Layout from "../components/Layout/layout"

const IndexPage = () => {

  return (
    <Layout>
      <header>
        <div className={ styles.headerImgs }>
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
        <div className={ styles.headerNav }>
          <p className={ styles.navItem } >about us v</p>
          <p className={ styles.navItem } >our products v</p>
          <p className={ styles.navItem } >intimate health v</p>
          <p className={ styles.navItem } >contact us</p>
        </div>
        <StaticImage src='../assets/images/banner-hero@2x.png' alt='banner'
          quality={ 90 } height={ 550 }
        />
      </header>
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
          <StaticImage src='../assets/icons/icons@2x.png' alt='icones' quality={ 90 } />
        </section>
        <section className={ styles.section }>
          <h2 className={ styles.sectionTitle }>whatever your age. whatever your lifestyle. whatever your interests.</h2>
          <div className={ styles.sectionText }>
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
        <section className={ styles.section }>
          <h2 className={ styles.sectionTitle }>our products</h2>
          <div className={ styles.products }>
            <div className={ styles.productCard }>
              <StaticImage src='../assets/images/image mask-2@2x.png' alt='Wellness' quality={ 90 } />
              <div>
                <p className={ styles.productDescription }>intibiome wellness daily intimate wash</p>
              </div>
              <div className={ styles.prodWellness }>
                <p className={ styles.productType }>wellness</p>
              </div>
            </div>
            <div className={ styles.productCard }>
              <StaticImage src='../assets/images/image mask-1@2x.png' alt='Active' quality={ 90 } />
              <div className={ styles.productDescription }>
                <p>intibiome active extra protection intimate wash</p>
              </div>
              <div className={ styles.prodActive }>
                <p className={ styles.productType }>active</p>
              </div>
            </div>
            <div className={ styles.productCard }>
              <StaticImage src='../assets/images/image mask@2x.png' alt='Agecare' quality={ 90 } />
              <div className={ styles.productDescription }>
                <p>intibiome agecare dryness relief intimate wash</p>
              </div>
              <div className={ styles.prodAgecare }>
                <p className={ styles.productType }>agecare</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <StaticImage src='../assets/images/Asset 22@2x.png' alt='Banner'
            quality={ 90 } height={ 437 }
          />
        </section>
        <section className={ styles.section }>
          <h2 className={ styles.sectionTitle }>keep up to date with our discoveries</h2>
          <div className={ styles.articles }>
            <div className={ styles.articleCard }>
              <StaticImage src='../assets/images/Screen Shot 2021-02-26 at 17.23.47-2@2x.png' alt='' quality={ 90 }/>
              <div className={ styles.articleSummary }>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className={ styles.articleCard }>
              <StaticImage src='../assets/images/Screen Shot 2021-02-26 at 17.23.47-1@2x.png' alt='' quality={ 90 }/>
              <div className={ styles.articleSummary }>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className={ styles.articleCard }>
              <StaticImage src='../assets/images/Screen Shot 2021-02-26 at 17.23.47@2x.png' alt='' quality={ 90 }/>
              {/* <div className={ styles.articleSummary }> */}
                <p  className={ styles.articleSummary }>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              {/* </div> */}
            </div>
          </div>
          <button className={ styles.button }>see more</button>
        </section>
      </main>
      <footer className={ styles.footer }>
        <div className={ styles.footerNav }>
          <p>contact us | faq | site map | privacy policy | cookies policy | legal notice</p>
        </div>
        <div className={ styles.footerImgs }>
          <StaticImage src='../assets/images/Image 1@2x.png' alt='U-labs logo' quality={ 90 } width={ 116 } height={ 29 }/>
          <StaticImage src='../assets/icons/Layer 2.svg' alt='Instagram logo' quality={ 90 } width={ 42.55 } height={ 42.55 }/>
        </div>
      </footer>
    </Layout>
  )
}

export default IndexPage