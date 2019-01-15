import React, { Component } from 'react';
import './App.css';
import Display from './display';



class App extends Component {


  state = {
    data: [],
    input1: '',
    input2: '',
   
  }

  onChangeHandler = (e) => {
    if (e.target.name === 'input1') {

      this.setState({ input1: e.target.value })

    }
    if (e.target.name === 'input2') {

      this.setState({ input2: e.target.value })

    }
    if (e.target.name === 'input3') {

      this.setState({ input3: e.target.value })


    }

  }

  onClickSearch = () => {
  
    
    fetch("https://api.harvardartmuseums.org/" + this.state.input1.toLowerCase() + "?q=publicationyear:"+ this.state.input2  + "&apikey=6802de50-0503-11e9-8fc2-7765c49b991f")
      .then(response => response.json())
      .then(json => {
        var dataApi = json;
        // var x=[];
        // x.push(dataApi)
        this.setState(Object.assign({},this.state,{data:[...this.state.data,dataApi]}))
      })
  }

  render() {
    console.log(this.state);
    return (
      <div className="AppWrapper">

        <Display data={this.state.data} onClickSearch={this.onClickSearch} onChangeHandler={this.onChangeHandler} />

        

        {/* {console.log(this.state.data)} */}
        

      </div>
    );
  }
}

export default App;
  