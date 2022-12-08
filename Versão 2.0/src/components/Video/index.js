import React from 'react';
import { Link } from 'react-router-dom';
import './VideoStyles.css';


import backVideo from '../../assets/background.mp4';
import backVideo2 from '../../assets/background2.mp4';

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                {
                    localStorage.getItem('user_token') ?
                    <>
                     <source src={backVideo2} type='video/mp4' />
                    </>
                    :
                    <>
                    <source src={backVideo} type='video/mp4' />
                    </>
                }
               
            </video>
            <div className='content-video'>
                {
                    localStorage.getItem('user_token') ?
                        <>
                            <h1>Planeta Pets</h1>
                            <p>Adoção é um ato de amor</p>
                            <div className='btns'>
                                <Link to='/adote' className='btn'>Adote</Link>
                                <Link to='/perfil' className='btn'>Perfil</Link>
                            </div>
                        </>
                        :
                        <>
                            <h1>Planeta Pets</h1>
                            <p>Adoção é um ato de amor</p>
                            <div className='btns'>
                                <Link to='/adote' className='btn'>Adote</Link>
                                <Link to='/login' className='btn'>Login</Link>
                            </div>
                        </>
                }

            </div>
        </div>
    )
}

export default Video
