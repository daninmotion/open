import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import MainOne from './components/MainOne';
import MainTwo from './components/MainTwo';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
    	<div>
    		<Nav />
	      <div className="w-100 w-50-ns pa3 center">
	        <Header />
	      </div>
	      <div className="w-100 center">
	        <MainOne />
	      </div>
	      <div className="w-100 center">
	        <MainTwo />
	      </div>
	      <div className="w-100 center">
	        <Footer />
	      </div>
	    </div>
    );
  }
}

export default App;
