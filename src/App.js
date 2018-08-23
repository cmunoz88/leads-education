import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import queryString from 'query-string';
import UniDataPanel from './components/UniDataPanel/UniDataPanel';



const params = queryString.parse(window.location.search)


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


class App extends Component {
  render() {
    return (
      <div className="App">
          { Header() }
          { Result() }
          <UniDataPanel RecomendedUni={0} name ={params.name}/>
      </div>
    );
  };


}

export default App;
