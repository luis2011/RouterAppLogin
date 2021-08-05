import React from 'react'
import {Redirect, Route} from 'react-router'

// ... rest es el resto de props que vienen del otro componente
const PublicRouter = ({auth, component: Component, ...rest}) => {
    return (
        <Route 
            {...rest} 
                component={(props)=> 
                    !auth.log ? <Component {...props} /> :  <Redirect to="/" /> 
            }
        />
    );
}

export default PublicRouter
