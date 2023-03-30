import {useParams} from "react-router-dom";
import axios from "axios";
import {useState} from 'react';

export default function show(){

    const p = useParams();

    const charData = axios.get("https://rickandmortyapi.com/api/character/" + p.c_id);
    const [name, setName] = useState("");

    charData.then(
        response => {
            
            setName(response.data.name);
        }
    )
    
    return(
        <h1>{name}</h1>
    );
}