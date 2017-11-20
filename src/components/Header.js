import React from 'react';
import Button from './Button';

export default () => (
  <header className="tc mv5">
		<h1 className="f1">
  		We help small businesses reach more customers through
  		emerging platforms.
  	</h1>
  	<p className="f3">Platforms like OfferUp, and Letgo.</p>
  	<div>
  		<img src="https://s3.amazonaws.com/get-open/Landing+Page/offerup-logo.png" className="mw3 mr5" />
  		<img src="https://s3.amazonaws.com/get-open/Landing+Page/letgo-logo.png" className="mw3" />
  	</div>
  	<div className="mt5">
  		<Button />
  	</div>
  </header>
)