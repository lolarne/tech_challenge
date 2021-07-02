import { useState } from 'react';
import './form.scss';

const Form = () => {
    const [name, setName] = useState('');

    return (
        <div>
            <h2>Ajouter un(e) Argonaute</h2>
            <form>
                <label for="name">Nom de l&apos;Argonaute</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Charalampos"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default Form;