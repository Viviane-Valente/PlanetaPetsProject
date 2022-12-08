import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import NavBar from '../components/NavBar/index'
import Form from '../components/Form/Login'

const Entrar = () => {
    return (
        <div>
            <NavBar />
           <HeroImage heading='LOGIN' text='Entre & Adote - Planeta Pets' /> 
            <Form />
            <Footer/>
        </div>
    )
}

export default Entrar
