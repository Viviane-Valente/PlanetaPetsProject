import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Aboutus from '../components/Sobre'
import NavBar from '../components/NavBar'

const Sobre = () => {
    return (
        <div>
            <NavBar />
            <HeroImage heading='PLANETA PETS' text='Adoção é um ato de amor' /> 
            <Aboutus />
            <Footer />
        </div>
    )
}

export default Sobre;
