import React, { Component } from 'react';
import marro from './assets/logo_marro.png';
import us from './assets/us.json';
import './UniDataPanel.css';
import axios from 'axios';


const Uni = (props) => {
    function selectUni(uniName,user) {

        var params = new URLSearchParams();
        params.append('entry.1232311742', user);
        params.append('entry.1030870581', uniName);
        axios.post('https://docs.google.com/forms/u/1/d/e/1FAIpQLSfIIrd2kF_cY38Q--B8nrnjrAM0MwujtzRgdsw6ig0fU16x3Q/formResponse', params);
        props.onChangeSelectedU(uniName);
    }

    return (
        <div className="col-12 col-md-4 pt-3 text-center" >
            <div className={"card border-success text-center p-3 " + (props.isRecommended ? 'super-border':'') }>
                Universidad <br/> {props.uni.name}
                <div className="p-4">
                    <img className="img-fluid" width="200" height="200" src={marro}  alt={props.uni.img} />
                </div>
                <div className='mx-3 mt-2'>
                    <button type="button" data-toggle="modal" onClick={() =>{selectUni(props.uni.name, props.name)}} data-target="#gracias" className={"btn btn-primary btn-lg btn-block " + (props.isRecommended ? 'btn-success':'btn-danger')}>Aplicar</button>
                </div>
            </div>
        </div>

    )
};


class UniDataPanel extends Component {
    constructor() {
        super();
        this.state = {
            us,
            selectedU : '-'
        }
    }

    onChangeSelectedU(newUni) {
        this.setState({
            selectedU: newUni
        });
    }


    render() {
        const uniData = us.us.map((u,i) => {
            return(
                <Uni uni={u}  key={i} isRecommended={i===this.props.RecomendedUni} name={this.props.name} onChangeSelectedU={this.onChangeSelectedU.bind(this)}/>
            )
        })

        return (
            <div className="container-fluid p-5" >
                <div className="row">
                { uniData}
                </div>
                <div className="modal fade" id="gracias" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <strong>¡gracias {this.props.name}!</strong> tu información fue enviada exitosamente a la universidad {this.state.selectedU}.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


}

export default UniDataPanel;
