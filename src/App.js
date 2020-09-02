import React, { Component } from 'react';
import TextInputComponent from './components/TextInputComponent';
import SelectInputComponent from './components/SelectInputComponent';
import './App.css';

const block = require('./assets/test.json');

class App extends Component {
  state = {
    data : {}
  }

// To Change State
valueChangeHandler = (event) =>{
  this.setState({
    data: {...this.state.data, [event.target.name]:event.target.value }
  })
  //console.log(this.state.data);
}

 render(){
  return (
    <div className="row">
    <form className="col-sm-6">
      {block.attributes.map((att, index) => {
          return(
            <div key={index}>
            {'text' === att.type && (<TextInputComponent label={att.label} name={`data_${index}`} placeholder={att.placeholder} change={this.valueChangeHandler} />)
            }
            
            {'select' === att.type && (<SelectInputComponent label={att.label} name={`data_${index}`} placeholder={att.placeholder} options={att.options} change={this.valueChangeHandler} />)
            }
            </div>
          )
        })}
      </form>
      <div className="col-sm-6">
     {
       block.attributes.map((att, index)=>{
         return(
           <div>
           {'h1' === att.element && (<h1>{this.state.data[`data_${index}`]}</h1>)}
           {'p' === att.element && (<p>{this.state.data[`data_${index}`]}</p>)}
           </div>
         )
       })
     }</div>
      </div>
  );
}
}

export default App;
