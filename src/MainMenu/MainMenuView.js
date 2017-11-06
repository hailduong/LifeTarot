import React from 'react';
import {UISref} from '@uirouter/react';


export default class MainMenu extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1 className="text-center mt-5">Life Tarot</h1>
						<ul className="list-group text-center mt-5">
							<UISref to='singleCardView'>
								<li className="list-group-item">View One Card</li>
							</UISref>
							<li className="list-group-item">About</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
