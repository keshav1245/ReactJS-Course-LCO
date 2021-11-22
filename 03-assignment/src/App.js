import React from 'react'


import Navbar from './Navbar'
import IntroSection from './IntroBanner'
import Portfolio from './Portfolio'
import About from './About'
import ContactMe from './ContactMe'
import Footer from './Footer'
import Copyright from './Copyright'
import Model from './Modal'


const App = () => (

    <div>
        <Navbar />
        <IntroSection />
        <Portfolio />
        <About />
        <ContactMe />
        <Footer />
        <Copyright />
        <Model modalId = 'portfolioModal1' modalTitle='Log Cabin' modalImage = 'assets/img/portfolio/cabin.png' />
        <Model modalId = 'portfolioModal2' modalTitle='Tasty Cake' modalImage = 'assets/img/portfolio/cake.png' />
        <Model modalId = 'portfolioModal3' modalTitle='Circus Tent' modalImage = 'assets/img/portfolio/circus.png' />
        <Model modalId = 'portfolioModal4' modalTitle='Controller' modalImage = 'assets/img/portfolio/game.png' />
        <Model modalId = 'portfolioModal5' modalTitle='Locked Safe' modalImage = 'assets/img/portfolio/safe.png' />
        <Model modalId = 'portfolioModal6' modalTitle='Submarine' modalImage = 'assets/img/portfolio/submarine.png' />
    </div>

)

export default App