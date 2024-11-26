import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Air plant glossier ethical pinterest raw denim semiotics distillery,
            everyday carry bodega boys letterpress iceland edison bulb. Cardigan
            health goth franzen, thundercats Brooklyn everyday carry plaid
            actually lumbersexual JOMO small batch tofu yes plz. DSA crucifix
            tattooed, hell of palo santo green juice authentic freegan ugh
            master cleanse thundercats drinking vinegar blackbird spyplane plaid
            lo-fi.
          </p>
        </div>
        <div className="img-container">
            <img src = {heroImg} alt = "women and the browser" className='img'></img>
        </div>
      </div>
    </section>
  )
}

export default Hero