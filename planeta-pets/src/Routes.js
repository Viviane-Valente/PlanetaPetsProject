import React from "react";
import { Switch, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar";


export default () => {

    return(
        <Switch>
            <Route exact path="/">
                <NavBar />
            </Route>
            <Route exact path="/teste">
                pagina test
            </Route>
        </Switch>
    )
}