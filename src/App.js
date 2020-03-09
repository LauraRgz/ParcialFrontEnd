import React, { Component } from 'react';
import './App.css';
import Films from "./assets/data";
import Left from "./components/Left";

class App extends Component {
  state = {
    films: [...Films],
    bigPicture: null,
    close: false
  };

  onBigPictureClickHandler = bigPicture =>{
    //console.log(bigPicture)
    this.setState({bigPicture});
  }

  // onXClickHandler = () =>{ 
  //   let x =this.state.close;
  //    let close = !x;
  //   this.setState({close});
  // }

  render() {
    return (
      <div className="App">
          <Left
            onClick = {{onBigPicture: this.onBigPictureClickHandler}}
            data = {this.state}
          />
      </div>
    );
  }
}

export default App;
