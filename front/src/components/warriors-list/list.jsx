import { useEffect, useState } from 'react';
import axios from 'axios';
import {FETCH} from '../../Fetch.js';
import './list.scss';

const List = () =>{
    const [warriors, setWarriors] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const getWarriors = await axios.get(`${FETCH}/warriors/get`);

            if(getWarriors.data && JSON.stringify(warriors) !== JSON.stringify(getWarriors.data)){
                setWarriors(getWarriors.data);
            }
        })()
    }, [warriors]);

    return(
        <div>
            <h2>Membres de l&apos;équipage</h2>
            <div>
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