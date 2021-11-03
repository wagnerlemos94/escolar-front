import React from 'react';
import { withRouter } from 'react-router-dom';
import {MDBInput } from 'mdbreact';
import Card from '../Card';
import FormGroup from '../FormGroup';
import Responsavel from './Responsavel';

class Pessoa extends React.Component{
    state = {
    }

    constructor(){
        super();
        // this.service = new UsuarioSerice;
    }
   
    render(){
        return(            
            <Card className="mt-5" title="Pessoa">
                <FormGroup label="Dados Pessois">
                <div className="row mt-3">
                    <div className="col-sm-12">
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Nome</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">CPF</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">RG</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Nascimento</span>
                            <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                    </div>
                    <div className="col-sm">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option defaultValue selected>Selecione tipo de Pessoa</option>
                            <option value="1">Responsável</option>
                            <option value="2">Condutor</option>
                            <option value="3">Aluno</option>
                        </select>
                    </div>
                </div>
                <Responsavel></Responsavel>

                </FormGroup>
            </Card>
        );
    }
}

export default withRouter(Pessoa); 