import { Fragment, React, useState } from 'react';
import './About.css';
import img from '../../assets/img/Logo2.png';

const About = () => {
const [ toggleTab, setToggleTab ] = useState(3)
const toggleState = (index) => {
    setToggleTab(index)
}

    return (
        <Fragment>
            <section className='about'>
                <div className='row'>

                    <div className='column'>
                        <div className='about-img'>
                            <img className='img' src={img}/>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='tabs'>
                            <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
                            onClick = {() => toggleState(3)}
                            >
                                <h2>Sobre Nós</h2>
                            </div>

                        </div>

                        <div className='tab-content'>
                         {/* Experience Context */}
                            <div className={toggleTab === 3 ? "content active-content":"content"}>
                                <div className='exp-column'>
                                    <h3>Projeto Planeta Pets</h3>
                                    <span>Adoção é uma escolha de amor</span>
                                    <p>Quem não ama cachorros e gatos? Um animalzinho em casa é uma amizade para vida toda! A convivência com pets traz inúmeros benefícios para as pessoas, como: vinculo afetivo, mais alegria em casa e união na família. Mas o maior benefício que a adoção de animais pode nos trazer é a luta contra o abandono. Segundo a Organização Mundial da Saúde (OMS), somente no Brasil, cerca de 30 milhões de animais estão em situação de abandono, sendo aproximadamente 20 milhões de cães e 10 milhões de gatos. Então, nos da Planeta Pets Project estamos aqui para combater o abandono de animais e ajudar você a encontrar um amigo para toda vida.</p>
                                </div>

                                <div className='exp-column'>
                                    <h3>Olá, somos a Idev Company! </h3>
                                    <span>Idea Developer - 2022</span>
                                    <p>Somo uma empresa criado em 2022 por jovens do Instituto Federal de Educação, Ciência e Tecnologia do Ceará | Campus Fortaleza, onde o nosso lema é "Sempre Buscando e Projetando Ideias!" Seja ela qual for.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default About;