import React from "react"
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {

  return (
    <>
      <header>
        <div>
          <StaticImage src='../assets/icons/ic.menu.svg' alt='Menu' />
          <StaticImage src='../assets/images/Module 1 - Header 970x60025@2x.png' alt='Logo' />
          <StaticImage src='../assets/icons/ic.search.svg' alt='Pesquisa' />
        </div>
        <div>
          <p>about us v</p>
          <p>our products v</p>
          <p>intimate health v</p>
          <p>contact us</p>
        </div>
        <StaticImage src='../assets/images/banner-hero@2x.png' alt='banner' />
      </header>
      <main>
        <section>
          <h2>we're here to help</h2>
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
          <StaticImage src='../assets/icons/icons@2x.png' alt='icones' />
        </section>
        <section>
          <h2>whatever your age. whatever your lifestyle. whatever your interests.</h2>
          <p>
            Co-created with gynaecologists, our revolutionary products have been expertly developed to 
            support your intimate microbiome and pH balance, and strengthen overall natural health.
          </p>
          <p>
            As the experts in intimate hygiene, we want to bring discussion about intimate wellness care 
            out of the dark and demystify the taboos that surround it.
          </p>
        </section>
        <section>
          <h2>our products</h2>
          <div>
            <div>
              <StaticImage src='../assets/images/image mask-2@2x.png' />
              <p>intibiome wellness daily intimate wash</p>
              <p>wellness</p>
            </div>
            <div>
              <StaticImage src='../assets/images/image mask-1@2x.png' />
              <p>intibiome active extra protection intimate wash</p>
              <p>active</p>
            </div>
            <div>
              <StaticImage src='../assets/images/image mask@2x.png' />
              <p>intibiome agecare dryness relief intimate wash</p>
              <p>agecare</p>
            </div>
          </div>
        </section>
        <section>
          <StaticImage src='../assets/images/Asset 22@2x.png' />
        </section>
        <section>
          <h2>keep up to date with our discoveries</h2>
          <div>
            <div>
              <StaticImage src='../assets/images/Screen Shot 2021-02-26 at 17.23.47-2@2x.png' alt='' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <StaticImage src='../assets/images/Screen Shot 2021-02-26 at 17.23.47-1@2x.png' alt='' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <StaticImage src='../assets/images/Screen Shot 2021-02-26 at 17.23.47@2x.png' alt='' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <button>see more</button>
        </section>
      </main>
      <footer>
        <div>
          <p>contact us | faq | site map | privacy policy | cookies policy | legal notice</p>
        </div>
        <div>
          <StaticImage src='../assets/images/Image 1@2x.png' alt='U-labs logo' />
          <StaticImage src='../assets/icons/Layer 2.svg' alt='Instagram logo' />
        </div>
      </footer>
    </>
  )
}

export default IndexPage