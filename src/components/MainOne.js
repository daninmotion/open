import React from 'react';
// import delivery from '../img/icon/delivery.svg'; //Incase I want to add an svg.

const MainOne = () => (

	<section className="bg-green pb7 pt6-ns pt5">
		<div className="w-100 center">
			<h2 className="f1-ns tc white mb6-ns mb5">
				How it works.
			</h2>
			<div className="flex flex-wrap justify-around cf">
				<div className="fl w-25-l w-100 pa3 tc tl-m tl-l">
					<div className="tc">
						<img src="https://s3.amazonaws.com/get-open/Landing+Page/camera.png" className="mw4" alt="camera" />
					</div>
					<h3 className="f3 white mt5 mb3 lh-title">
						We upload and handle all your postings, so that
						you won't have to.
					</h3>
					<p className="white">
						We upload and manage all your postings on
						OfferUp and Letgo.
					</p>
				</div>
				<div className="fl w-25-l w-100 pa3 pt5 pb4 pv0-m pv0-l tc tl-m tl-l">
					<div className="tc">
						<img src="https://s3.amazonaws.com/get-open/Landing+Page/dollar.png" className="mw3" alt="dollar sign" />
					</div>
					<h3 className="f3 white mt5 mb3 lh-title">
						Accept payments from customers on these platfroms.
					</h3>
					<p className="white">
						Don't miss a sale. We allow for customers to pay you directly.
					</p>
				</div>
				<div className="fl w-25-l w-100 pa3 mt5 mt0-m mt0-l tc tl-m tl-l lh-title">
					<div className="tc">
						<img src="https://s3.amazonaws.com/get-open/Landing+Page/delivery.png" className="mw4 pb3" alt="delivery" />
					</div>
					<h3 className="f3 white mt5 mb3">
						We deliver items purchased straight to your customer.
					</h3>
					<p className="white">
						Your customers get same day delivery on items they purchase from your store.
					</p>
				</div>
			</div>
		</div>
	</section>
)

export default MainOne