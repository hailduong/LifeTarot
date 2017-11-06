import React from 'react';

export default class SingleCardView extends React.Component {

	getRandomCardNumber(){
		return Math.floor(Math.random() * 78) + 1  ;
	}

	render() {

		const randomNumber = this.getRandomCardNumber();

		return (
			<div className="container">
				<div className="text-center">
					<p className="lead mt-5">{randomNumber}</p>
				</div>
			</div>
		)
	}
}
