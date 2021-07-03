import { useEffect, useState } from 'react';
import axios from 'axios';
import {FETCH} from '../../Fetch.js';
import './list.scss';

const List = (newWarrior) =>{
    const [warriors, setWarriors] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const getWarriors = await axios.get(`${FETCH}/warriors/get`);

            if(newWarrior && getWarriors.data){
                setWarriors(getWarriors.data);
            }
        })()
    }, [newWarrior]);

    return(
        <div className="warriorList">
            <h2>Membres de l&apos;équipage</h2>
            <div className="list">
                <ul>
                    {warriors.map((warrior, warriorKey) =>(
                        <li key={warriorKey}>{warrior.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default List;