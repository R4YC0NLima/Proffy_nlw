import React, { useState, FormEvent} from 'react';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';



import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

function TeacherForm() {

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [cost, setCost] = useState('');
    const [subject, setSubject] = useState('');


    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addNewScheduleItems() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
            
        ]);
        
    }

    function setScheduleItemValue(position: Number, field: string, value: string) {

        const newArray = scheduleItems.map((scheduleItem, index) => {
            if(index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
            
            
        })
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost
        });
        
    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrivel que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário." />

        <main>
            <form action="" method="post" onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input 
                        name="name" 
                        label="Nome Completo" 
                        value={name} 
                        onChange={(e) => { setName(e.target.value) }}
                    />
                    <Input 
                        name="avatar" 
                        label="Avatar"
                        value={avatar} 
                        onChange={(e) => { setAvatar(e.target.value) }}
                    />
                    <Input 
                        name="whatsapp" 
                        label="Whatsapp"
                        value={whatsapp} 
                        onChange={(e) => { setWhatsapp(e.target.value) }}
                    />
                    <Textarea 
                        name="bio" 
                        label="Biografia"
                        value={bio} 
                        onChange={(e) => { setBio(e.target.value) }}
                    />

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Artes', label: 'Artes'},
                            { value: 'Português', label: 'Português'},
                            { value: 'História', label: 'História'},
                            { value: 'Matemática', label: 'Matemática'},
                        ]}/>
                    <Input 
                        name="cost" 
                        label="Custo da sua hora por aula"
                        value={cost}
                        onChange={(e) => { setCost(e.target.value) }}/>
                    <Input name="whatsapp" label="Whatsapp"/>

                </fieldset>
                <fieldset>
                    <legend>
                        Horários Disponíveis
                        <button type="button" onClick={addNewScheduleItems}>
                            + Novo Horário
                        </button>
                    </legend>

                    { scheduleItems.map((scheduleItem, index) => {
                        return(
                            <div key={scheduleItem.week_day} className="schedule-item">
                            <Select
                                name="week_day" 
                                label="Dia da semana"
                                onChange={ e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                options={[
                                    { value: '0', label: 'Domingo'},
                                    { value: '1', label: 'Segunda-Feira'},
                                    { value: '2', label: 'Terça-Feira'},
                                    { value: '3', label: 'Quarta-Feira'},
                                    { value: '4', label: 'Quinta-Feira'},
                                    { value: '5', label: 'Sexta-Feira'},
                                    { value: '6', label: 'Sábado'},
                                    
                                ]} 
                            />
                            <Input name="from" label="Das" type="time"/>
                            <Input name="to" label="Até" type="time"/>
                        </div>
                        )
                    }) }
                    
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br/>
                        Preencha todos os dados
                    </p>

                    <button type="submit" onClick={addNewScheduleItems}>Salvar Cadastro</button>
                </footer>

            </form>
        </main>
        </div>

        
    )

}

export default TeacherForm;