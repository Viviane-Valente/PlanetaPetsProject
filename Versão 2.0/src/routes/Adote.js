import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import AdoteSection from '../components/Adote'
import NavBar from '../components/NavBar'

const Adote = () => {
    return (
        <div>
            <NavBar />
            <HeroImage heading='ADOTE' text='Adoção é um ato de amor' /> 
            <AdoteSection />
            <Footer />
        </div>
    )
}

export default Adote
