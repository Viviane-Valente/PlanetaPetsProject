import React from 'react'
import './FooterStyles.css'
import { FaGithub } from 'react-icons/fa'
import logo from '../../assets/img/Logo.png'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                <Link to='/'><img src={logo} alt="Logo" className='logo' /></Link>
                </div>
                <div className='right'>
                    <h4>About the company</h4>
                    <p>"Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam"</p>
                    <div className='social'>
                        <FaGithub size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
