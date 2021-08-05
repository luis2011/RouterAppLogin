import React from 'react'
import { Characters } from '../models/Characters'
import Card from '../components/Card'

const MenScreen = () => {

    const men = Characters.filter(character => character.type === "h")
    
    return (
        <div className="container mt-3">
            <h1>Man Screen</h1>
            <hr />
            <div className="row">
                {men.map(man => 
                    <Card key={man.id} {...man}/>
                )}
            </div>
            
        </div>
    )
}

export default MenScreen
