import React from 'react'
import Footer from '../components/Footer'
import AdoteformCards from '../components/AdoteForm/index'
import HeroImage from '../components/HeroImage'
import NavBar from '../components/NavBar'
import { ChakraProvider } from '@chakra-ui/react'

const Adoteform = () => {
    return (
        <div>
            <NavBar />
            <ChakraProvider>
            <HeroImage heading='Formulário de Adoção' text='Adoção é um ato de amor' />
            <AdoteformCards />
            <Footer />
            </ChakraProvider>
        </div>
        
    )
}

export default Adoteform