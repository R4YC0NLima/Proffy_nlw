import React from 'react';


import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

interface TeacherItemProps {
    teacher: {
        id: 2,
        avatar: string,
        bio: string,
        cost: number,
        name: '',
        subject: '',
        user_id: 2,
        whatsapp: '414141414'
    }
}

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img 
                    src="https://avatars1.githubusercontent.com/u/49953505?s=460&u=f3ce52353b9c6eb766d4a8c850f000d3f2a07f6b&v=4" 
                    alt="foto do proffy"
                />
                <div>
                    <strong>Raycon Lima</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br/><br/>
                Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências.
                Mais de 200.000 pessoas já passaram por uma das minha explosões.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;