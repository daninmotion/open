import React from 'react';

const MainOne = () => (
	<section className="bg-green pb7 pt6-ns pt5 ph7-ns">
		<div className="w-100 center">
			<h2 className="f1-ns tc white mb5">
				How it works.
			</h2>
			<div className="flex flex-wrap justify-around cf">
				<div className="fl w-25-l w-100 pa3 tc tl-m tl-l">
					<div className="tc pa4">
						<img src="https://s3.amazonaws.com/get-open/Landing+Page/camera-92px.png" alt="camera icon" />
					</div>
					<h3 className="f3 white mb3 lh-title">
						We upload and handle all your postings, so that
						you won't have to.
					</h3>
					<p className="white">
						We upload and manage all your postings on
						OfferUp and Letgo.
					</p>
				</div>
				<div className="fl w-25-l w-100 pa3 tc tl-m tl-l">
					<div className="tc pa4">
						<img src="https://s3.amazonaws.com/get-open/Landing+Page/dollar-sign-92px.png" alt="dollar sign icon" />
					</div>
					<h3 className="f3 white mb3 lh-title">
						Accept payments from customers on these platfroms.
					</h3>
					<p className="white">
						Don't miss a sale. We allow for customers to pay you directly.
					</p>
				</div>
				<div className="fl w-25-l w-100 pa3 tc tl-m tl-l lh-title">
					<div className="tc pa4">
						<img src="https://s3.amazonaws.com/get-open/Landing+Page/delivery-92px.png" alt="delivery truck" />
					</div>
					<h3 className="f3 white mb3">
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