import React from 'react'
import { useParams } from 'react-router'
import { Characters } from '../models/Characters';

const CharacterScreen = ({history}) => {
   
    const { id } = useParams();

    const {type, name, description } = Characters.find(character => character.id === id)

    const path =`/assets/${type}-${id}.png`

    const handlerBack = ()=>{
        history.goBack(); // este metodo me regresa a mi ultima url visitada
    }

    return (
        <div className="container row mt-5">
           
        <div className="col-8">
            <img  className="img-thumbnail" style={{
                width:"70%",
                height:"400px"
            }} src={path} alt={id} />
        </div>
        <div className="col-4">
            <h2>Nombre: {name}</h2>
            <p>Descripción: {description}</p>

            <button onClick={handlerBack} className="btn btn-outline-warning">Go Back</button>
        </div>

        </div>
    )
}

export default CharacterScreen
