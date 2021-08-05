import React from 'react'
import { Characters } from '../models/Characters'
import Card from '../components/Card'

const WomenScreen = () => {
   
    const women = Characters.filter(character => character.type === "m")
    
    return (
        <div className="container mt-3">
            <h1>Woman Screen</h1>
            <hr />
            <div className="row">
                {women.map(woman => 
                    <Card key={woman.id} {...woman}/>
                )}
            </div>
            
        </div>
    )
       
}

export default WomenScreen
