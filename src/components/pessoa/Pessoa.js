import React from 'react';
import { withRouter } from 'react-router-dom';
import {MDBInput } from 'mdbreact';
import Card from '../Card';
import FormGroup from '../FormGroup';

class Pessoa extends React.Component{
    state = {
    }

    constructor(){
        super();
        // this.service = new UsuarioSerice;
    }
   
    render(){
        return(            
            <Card title="title">
            </Card>
        );
    }
}

export default withRouter(Pessoa); 