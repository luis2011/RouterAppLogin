import { useEffect, useReducer } from 'react';
import LoginRouter from './routers/LoginRouter';

import {AuthReducer} from "./reducers/AuthReducer";
import {AuthContext} from "./context/AuthContext";

const init = ()=>{
  return JSON.parse(localStorage.getItem('log')) || {log:false}
}

const App = () => {

  const [log, dispatch] = useReducer(AuthReducer, {}, init) // useReducer
 
 useEffect(() => {
   
  localStorage.setItem('log',JSON.stringify(log))

 }, [log])

// configurada la autenticación
// log: me va a permitir saber si estoy loggeado en toda la aplicación
// dispach: me va a dejar hacer cambios en cualquier parte de la aplicación
 return ( 
 <AuthContext.Provider value={{log, dispatch}}>
    <LoginRouter/>
 </AuthContext.Provider>
 
  )
}

export default App;