import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';


class App extends Component {
  render() {
    return (
    	<div>
    		<Nav />
	      <div className="w-100 w-50-ns pa3 center">
	        <Header />
	      </div>
	    </div>
    );
  }
}

export default App;
