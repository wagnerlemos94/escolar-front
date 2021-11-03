import React from 'react';
import Select from 'react-select'

class Responsavel extends React.Component{


    state = {
        parentesco:[
            { value: '1', label: 'PAI' },
            { value: '2', label: 'MÃE' },
            { value: '3', label: 'TIO(a)' },
            { value: '4', label: 'AVÔ(a)' }
        ]
    }

    render(){
        return(
            <div className="col">
                <Select options={this.state.parentesco} />
            </div>
        );
    }

}


export default Responsavel;