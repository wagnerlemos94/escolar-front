import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../Card';
import FormGroup from '../FormGroup';
import Responsavel from './Responsavel';
import Aluno from './Aluno';
import Condutor from './Condutor';

class Pessoa extends React.Component{
    constructor(){
        super();
        // this.service = new UsuarioSerice;
    }
   
    state = {
        perfil:null,
        title:"Pessoa",
        pessoa:{
            nome:"",
            cpf:"",
            rg:"",
            nascimento:"",
            enderecos:[]
        },
        endereco:{
            cep:"",
            uf:"",
            cidade:"",
            bairro:"" ,
            rua:"" ,
            numero:"", 
            complemento:"" 
        },aluno:{

        },
        contatos:[]
    }

    salvar = () => {
        this.state.pessoa.enderecos.push(this.state.endereco);
        const pessoa = this.state.pessoa;
        console.log(pessoa);
    }
  
    render(){
        return(            
            <Card className="mt-5" title={this.state.title}>
                <form>
                    <FormGroup label="Dados Pessois">
                        <div className="row mt-3">
                            <div className="col-12">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Nome</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                        onChange={e => this.setState({pessoa:{
                                            ...this.state.pessoa,
                                            nome: e.target.value
                                        }})}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">CPF</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" 
                                   onChange={e => this.setState({pessoa:{
                                    ...this.state.pessoa,
                                    cpf: e.target.value
                                }})}
                            />
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">RG</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" 
                                   onChange={e => this.setState({pessoa:{
                                    ...this.state.pessoa,
                                    rg: e.target.value
                                }})}
                            />
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Nascimento</span>
                                    <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" 
                                   onChange={e => this.setState({pessoa:{
                                    ...this.state.pessoa,
                                    nascimento: e.target.value
                                }})}
                            />
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Perfil</span>
                                    <select className="form-select form-select" aria-label=".form-select-sm example" onChange={e => this.setState({perfil:e.target.value})}>
                                        <option disabled selected >Selecione tipo de Pessoa</option>
                                        <option value="1">Responsável</option>
                                        <option value="2">Condutor</option>
                                        <option value="3">Aluno</option>
                                    </select>
                                </div>
                            </div>
                            {this.state.perfil == 1?
                                <Responsavel />
                                :this.state.perfil == 2?
                                <Condutor />
                                :this.state.perfil == 3?
                                <Aluno aluno={this.state.aluno}/>
                                :false
                            }
                        </div>
                    </FormGroup>
                    <FormGroup label="Endereço">
                        <div className="row mt-3">
                            <div className="col-4">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">CEP</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                    onChange={e => this.setState({endereco:{
                                        ...this.state.endereco,
                                        cep:e.target.value
                                        }})}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">UF</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                    onChange={e => this.setState({endereco:{
                                        ...this.state.endereco,
                                        uf:e.target.value}})}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Cidade</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                    onChange={e => this.setState({endereco:{
                                        ...this.state.endereco,
                                        cidade:e.target.value}})}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Bairro</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                    onChange={e => this.setState({endereco:{
                                        ...this.state.endereco,
                                        bairro:e.target.value}})}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Rua</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                    onChange={e => this.setState({endereco:{
                                        ...this.state.endereco,
                                        rua:e.target.value
                                        }})}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Numero</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                    onChange={e => this.setState({endereco:{
                                        ...this.state.endereco,
                                        numero:e.target.value
                                        }})}/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="input-group input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Complemento</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                    onChange={e => this.setState({endereco:{
                                        ...this.state.endereco,
                                        complemento:e.target.value
                                        }})}/>
                                </div>
                            </div>
                        </div>
                    </FormGroup>
                    <div>
                        <button type="button" className="btn btn-primary" onClick={this.salvar}>Salvar</button>
                    </div>
                </form>
            </Card>
        );
    }
}

export default withRouter(Pessoa); 