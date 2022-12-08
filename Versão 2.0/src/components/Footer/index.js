import React from 'react'
import './FooterStyles.css'
import { FaGithub } from 'react-icons/fa'
import logo from '../../assets/img/Logo2.png'
import {Link} from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    const currentYear = (new Date().getFullYear())
    const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear


    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                <Link to='/'><img src={logo} alt="Logo" className='logo' /></Link>
                </div>
                <div className='right'>
                    <h4>Planeta Pets</h4>
                    <p>Adoção é uma escolha de amor.</p> 
                    <div id='socialmedia'>
                    <SocialIcon className="social" url="https://github.com/idev-company" /> 
                    .
                    <SocialIcon className='social' url='https://www.instagram.com/'/>
                    .
                    <SocialIcon className='social' url='https://pt-br.facebook.com/'/>
                    .
                    <SocialIcon className='social' url='https://twitter.com/'/>
                    </div>
                    <br /> <span className='span'>© { yearTxt } Serviço - Desenvolvido pela Idev Company</span>
                </div>
                
            </div>
        </div>
    )
}

export default Footer
