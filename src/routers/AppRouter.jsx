import React ,{lazy, Suspense}from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

//import MenScreen from '../pages/MenScreen'
//import SearchScreen from '../pages/SearchScreen'
//import WomenScreen from '../pages/WomenScreen'
//import CharacterScreen from '../pages/CharacterScreen'
import Navbar from '../components/Navbar'
import Spinner from '../components/spinner'

//const Navbar = lazy(()=> import('../components/Navbar'));
const MenScreen = lazy(()=> import('../pages/MenScreen'));
const SearchScreen = lazy(()=> import('../pages/SearchScreen'));
const WomenScreen = lazy(()=> import('../pages/WomenScreen'));
const CharacterScreen = lazy(()=> import('../pages/CharacterScreen'));




// <h1 className="text-center">Loading...</h1>
const AppRouter = () => {
    return (
        <>
        <Navbar/>
        
        <Suspense fallback={<Spinner/>}>
        

           <Switch>
               <Route exact path="/men" component={MenScreen}/>
               <Route exact path="/women" component={WomenScreen}/>
               <Route exact path="/search" component={SearchScreen}/>  
               
               <Route exact path="/character/:id" component={CharacterScreen}/>  
              <Redirect to="/men"/>
           </Switch>
        </Suspense>
        </>
    )
}

export default AppRouter
