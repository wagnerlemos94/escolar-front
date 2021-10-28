import React from 'react';
import Login from '../views/Login';

import { Route, Switch, HashRouter} from 'react-router-dom';
import Pessoa from '../components/pessoa/Pessoa';


function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/pessoa" component={Pessoa} />
            </Switch>
        </HashRouter>
    );
}

export default Rotas;