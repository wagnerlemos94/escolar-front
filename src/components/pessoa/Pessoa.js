import React from 'react';
import { withRouter } from 'react-router-dom';
import {MDBInput } from 'mdbreact';
import Card from '../Card';
import FormGroup from '../FormGroup';
import Responsavel from './Responsavel';

class Pessoa extends React.Component{
    state = {
        tipoPessoa:null
    }

    constructor(){
        super();
        // this.service = new UsuarioSerice;
    }
   
    render(){
        return(            
            <Card className="mt-5" title="Pessoa">
                <form>
                    <FormGroup label="Dados Pessois">
                        <div className="row mt-3">
                            <div className="col-12">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Nome</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">CPF</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">RG</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Nascimento</span>
                                    <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                                </div>
                            </div>
                            <div className="col">
                                <select className="form-select form-select" aria-label=".form-select-sm example" onChange={e => this.setState({tipoPessoa:e.target.value})}>
                                    <option defaultValue selected >Selecione tipo de Pessoa</option>
                                    <option value="1">Responsável</option>
                                    <option value="2">Condutor</option>
                                    <option value="3">Aluno</option>
                                </select>
                            </div>
                            {this.state.tipoPessoa == 1?
                                <Responsavel />
                                :this.state.tipoPessoa == 2?
                                <Responsavel />
                                :false
                            }
                        </div>
                    </FormGroup>
                    <FormGroup label="Endereço">
                        <div className="row mt-3">
                            <div className="col-4">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">CEP</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">UF</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Cidade</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Bairro</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Rua</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Numero</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Complemento</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                                </div>
                            </div>
                        </div>
                    </FormGroup>
                </form>
            </Card>
        );
    }
}

export default withRouter(Pessoa); 