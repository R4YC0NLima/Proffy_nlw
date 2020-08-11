import React from 'react';


import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

interface TeacherItemProps {
    teacher: {
        id: number,
        avatar: string,
        bio: string,
        cost: number,
        name: string,
        subject: string,
        whatsapp: string
    };
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    return(
        <article className="teacher-item">
            <header>
                <img 
                    src="https://avatars1.githubusercontent.com/u/49953505?s=460&u=f3ce52353b9c6eb766d4a8c850f000d3f2a07f6b&v=4" 
                    alt="foto do proffy"
                />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
                {teacher.bio}
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ </strong>
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