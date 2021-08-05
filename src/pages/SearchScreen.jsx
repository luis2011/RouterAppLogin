import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router'
import queryString from 'query-string'
import { Characters } from '../models/Characters'
import Card from '../components/Card'

const SearchScreen = ({history}) => {

    // instalar la libreria para poder usar location
    // yarn add query-string
    const location = useLocation()

    const {q = ""} = queryString.parse(location.search);
    
    const [inputValue, setinputValue] = useState(q)
    const [characters, setCharacters] = useState([])


    const handlerChange = (e)=>{
        const value = e.target.value
        setinputValue(value)
    }

    const handlerSubmit = (e)=>{
        e.preventDefault();
        history.push(`?q=${inputValue}`) // se agrega el Query Params
       // console.log(inputValue)
    }

    const getCharacters = ()=>{
        if(inputValue.trim()!==""){
            // en caso de que sea vacio el string no se va a efectuar la busqueda
            const value = inputValue.toLocaleLowerCase() // con esto hago la busqueda por id en minúsculas
            const newValue= Characters.filter(character => 
                character.name.toLocaleLowerCase().includes(value)
            );

            setCharacters(newValue)
            //console.log(characters)
        }else{
            setCharacters([])
        }
    };

    useEffect(() => {
        getCharacters()  
    }, [q])

    return (
        <div className="container">
            <h1>Search Screen</h1>
            <hr />

        <div className="row">
            <div className="col-6">
                <h2>Search</h2>
                <form onSubmit={handlerSubmit}>
                    <label className="form-laber w-100">
                        Character: {" "}
                        <input 
                        placeholder="Name Character"
                        type="text" 
                        className="form-control" 
                        autoComplete="off" 
                        value={inputValue}
                        onChange={handlerChange}
                        />
                    </label>
                    <button type="submit" className="btn btn-info w-100 mt-2">
                        Search
                        </button>
                </form>
            </div>
            <div className="col-6">
                <h2>Results: {characters.length}</h2>
                {
                    characters.length === 0 && (<div className="alert alert-warning text-center">
                        Please Search a Character
                        </div>
                    )}

                    {
                        characters.map(character => (
                        <Card key={character.id}{...character}/>
                        ))
                    }

            </div>
        </div>

        </div>
    )
}

export default SearchScreen
