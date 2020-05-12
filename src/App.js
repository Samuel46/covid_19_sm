import React from 'react';
import {Header, Stat, Maps, Footer, Symtoms, Help} from './components';

import './App.css';


import{ fetchData } from './api';

class App extends React.Component {
state = {
  data: {}
}

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
  } 
  render() {
    const {data} = this.state
return (
    <div>
      <Header/>
      <Stat data= {data}/>
      <Maps/>
      <Symtoms/>
      <Help/>
      <Footer/>
    </div>
  );
}
}

export default App;
