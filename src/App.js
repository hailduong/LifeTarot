import React from 'react';
import ReactDOM from 'react-dom';
import {UIRouter, UIView, pushStateLocationPlugin} from '@uirouter/react';

import MainMenu from './MainMenu/MainMenuView';
import SingleCardView from "./SingleCardView/SingleCardView";

const states = [
	{
		name: 'main',
		url: '/',
		component: MainMenu,
	},
	{
		name: 'singleCardView',
		url: '/single-card',
		component: SingleCardView
	}
];

const plugins = [pushStateLocationPlugin];

ReactDOM.render(
	<UIRouter plugins={plugins} states={states}>
		<UIView/>
	</UIRouter>, document.getElementById('lifeTarot'));
