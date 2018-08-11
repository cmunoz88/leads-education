import React, { Component } from 'react';
import logo from './logo.svg';
import marro from './logo_marro.png';
import './App.css';
import us from './us.json'





const Header = () => (


<div className="container-fluid p-5">

   <div className="row">
      <div className="col-12">
    <img className="img-fluid" width="200" height="200" src={logo}  alt="logo" />
    </div>
   </div>
</div>
);


const Result = () => (
    <div className="container-fluid p-2" >
        <div className="row">
            <div className="col-12 text-center"  >
                <h1 className='text-white'><strong>!Gracias {params.name}!</strong> Tu información fue enviada exitosamente <br /></h1>
                <h2 className='App-title' >ESTAS SON LAS UNIVERSIDADES QUE TE RECOMENDAMOS</h2>
            </div>
        </div>
    </div>
);

function Uni() {
    return <div className="container-fluid p-5" >
        <div className="row">

        {us.us.map((u,i) => {
            return(
                <div className="col-12 col-md-4 pt-3 text-center" key={i}>
                    <div className="card  p-1">
                        Universidad <br/> {u.name}
                        <div className="p-4">
                        <img className="img-fluid" width="200" height="200" src={marro}  alt={u.img} />
                        </div>


                        <div className='mx-3 mt-2'>
                            <button type="button" className="btn btn-primary btn-lg btn-block btn-danger">Aplicar</button>

                        </div>
                    </div>

                </div>
            )
        })}
        </div>

    </div>
}

const queryString = require('query-string');

const params = queryString.parse(window.location.search)
class App extends Component {
  constructor() {
      super();
      this.state = {
          us,
          'test' : 'hola'
      }
      this.test = 'hola';
  }

  render() {
    return (
      <div className="App">
          {console.log(params)}



          { Header() }
          { Result() }
          <Uni />

      </div>
    );
  };


}

export default App;
