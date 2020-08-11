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
                    src={teacher.avatar} 
                    alt={teacher.avatar}
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
                    <strong>R$ {teacher.cost}</strong>
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