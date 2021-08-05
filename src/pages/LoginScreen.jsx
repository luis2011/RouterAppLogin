import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { authTypes } from '../types/authTypes'
const LoginScreem = () => {

    const {dispatch} = useContext(AuthContext)

    const history = useHistory();

    const handleLogin = ()=>{

        
        dispatch({type:authTypes.login})// esta linea nos cambia el estado de login false a true

           history.push("/");
    }
  
    return (
        <div className="container mt-5 text-center">
           <img src="/assets/animate.gif" alt="animacion" />
           <h1 className="my-3">Login Screen</h1>
           <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginScreem
