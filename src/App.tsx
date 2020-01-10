import React, { Component } from 'react';
import logo from './logo.svg';
import Toolbar from './components/Toolbar/Toolbar';
import {BrowserRouter, Route} from 'react-router-dom';
import DataTable from './components/Toolbar/DataTable';

class App extends Component{
  render() {
    return ( 
    <BrowserRouter>
      <div className="App">
        <Toolbar />
        <Route path = '/DataTable' component = {DataTable} />
      </div>
    </BrowserRouter>
    );
  } 
}

export default App;
