import React from 'react';
import cardMappingData from "../data/cardMapping";

export default class SingleCardView extends React.Component {

	getRandomCardNumber() {
		return Math.floor(Math.random() * 22) + 1;
	}

	getCardInfo(cardNumber) {
		const cardIndex = cardNumber - 1;
		return cardMappingData[cardIndex];
	}

	getRandomCardInfo() {
		const randomNumber = this.getRandomCardNumber();
		return this.getCardInfo(randomNumber);
	}

	render() {

		const randomCardInfo = this.getRandomCardInfo();
		const {title, upright, reversed, cardImage} = randomCardInfo;
		const imagePath = `./img/${cardImage}`;

		return (
			<div className="container single-card-view animated fadeIn">
				<div className="text-center">
					<h3 className="title">{title}</h3>
					<div className="mb-1">
						<img className="img-fluid card-image" src={imagePath} alt="Card Image"/>
					</div>
					<div className="text-center">
						<h5>Keywords:</h5>
						<p>{upright}</p>
					</div>
				</div>
			</div>
		)
	}
}
