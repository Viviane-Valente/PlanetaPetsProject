import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

const Contact = () => {
    return (
        <div>
            <Navbar />
           <HeroImage heading='LOGIN' text='Entre & Adote - Planeta Pets' /> 
            <Form />
            <Footer/>
        </div>
    )
}

export default Contact
