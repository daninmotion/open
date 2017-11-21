import React from 'react';
import Button from './Button';

export default () => (
  <header className="tc mv5">
		<h1 className="f1-ns mb4 lh-title">
  		We help small businesses reach more customers through
  		emerging platforms.
  	</h1>
  	<p className="f3-ns mb4">Platforms like OfferUp, and Letgo.</p>
  	<div>
  		<img src="https://s3.amazonaws.com/get-open/Landing+Page/offerup-logo.png" className="mw3 mr5" alt="offerup logo" />
  		<img src="https://s3.amazonaws.com/get-open/Landing+Page/letgo-logo.png" className="mw3" alt="letgo logo" />
  	</div>
  	<div className="mt5">
  		<Button />
  	</div>
  </header>
)