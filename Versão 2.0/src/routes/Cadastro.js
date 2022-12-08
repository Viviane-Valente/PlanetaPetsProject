import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import NavBar from '../components/NavBar'
import Cadastro from '../components/Form/Cadastro'

const Singup = () => {
    return (
        <div>
            <NavBar />
            <HeroImage heading='CADASTRO' text='Entre & Adote - Planeta Pets' /> 
            <Cadastro />
            <Footer />
        </div>
    )
}

export default Singup;
