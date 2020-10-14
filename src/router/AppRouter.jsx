import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
   
  } from "react-router-dom";


import { Homepage } from '../Paginas/Homepage';
import { Inicio } from '../Paginas/Inicio/Inicio';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>

            <NavBar/>
        <div>

            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/Inicio" component={Inicio}/>
                <Redirect  to="/" />
                
            </Switch>
            
        </div>
        </Router>
    )
}
