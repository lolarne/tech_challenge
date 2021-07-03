import { useState } from 'react';
import axios from 'axios';
import { FETCH } from '../../Fetch.js';
import './form.scss';
import List from '../warriors-list/list.jsx';

const Form = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState({
        confirm: '',
        error: ''
    })

    const [newWarrior, setNewWarrior] = useState(false);

    const AddWarrior = async (e) => {
        e.preventDefault();
        try {
            if (name) {
                const warriorName = { name };
                await axios.post(`${FETCH}/warriors/add`, warriorName);
                setName('');
                setNewWarrior(true);
                setMessage({ confirm: 'Argonaute enregistré', error: '' });
                setTimeout(() => {
                    setNewWarrior(false);
                }, 3000);
            }
        } catch (err) {
            console.error(err);
            setMessage({ confirm: '', error: 'erreur' });
        }
    }

    return (
        <>
            <div className="form">
                <h2>Ajouter un(e) Argonaute</h2>
                <form onSubmit={(e) => AddWarrior(e)}>
                    <div className="formGroup">
                        <label htmlfor="name">Nom de l&apos;Argonaute</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Charalampos"
                            value={name}
                            onChange={(e) => {setName(e.target.value); setMessage({confirm: '', error: ''})}}
                        />
                    </div>

                    <button type="submit">Envoyer</button>
                    {message.confirm !== '' && <p className="message confirm">{message.confirm}</p>}
                    {message.error !== '' && <p className="message error">{message.error}</p>}
                </form>
            </div>
            <List newWarrior={newWarrior}/>
        </>
    )
}

export default Form;