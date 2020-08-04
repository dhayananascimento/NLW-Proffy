import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/62670973?s=460&u=72c7cdf2f9a4f09a51795490ae176f49b889ece3&v=4" alt="Dhayana Nascimento"/>
                <div>
                    <strong>Dhayana Nascimento</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>Entusiasta das melhores tecnologias de química avançada.</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato.
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem