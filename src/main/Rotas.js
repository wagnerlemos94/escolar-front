import React from 'react';
import Login from '../views/Login';

import { Route, Switch, HashRouter} from 'react-router-dom';


function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
            </Switch>
        </HashRouter>
    );
}

export default Rotas;