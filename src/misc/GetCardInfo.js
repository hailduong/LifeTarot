export function getCardImage(number) {
	let cardImages = {
		0: require(`../img/00.png`),
		1: require(`../img/01.png`),
		2: require(`../img/02.png`),
		3: require(`../img/03.png`),
		4: require(`../img/04.png`),
		5: require(`../img/05.png`),
		6: require(`../img/06.png`),
		7: require(`../img/07.png`),
		8: require(`../img/08.png`),
		9: require(`../img/09.png`),
		10: require(`../img/10.png`),
		11: require(`../img/11.png`),
		12: require(`../img/12.png`),
		13: require(`../img/13.png`),
		14: require(`../img/14.png`),
		15: require(`../img/15.png`),
		16: require(`../img/16.png`),
		17: require(`../img/17.png`),
		18: require(`../img/18.png`),
		19: require(`../img/19.png`),
		20: require(`../img/20.png`),
		21: require(`../img/21.png`)
	};

	return cardImages[number];
}

export function getCardMeaning(number) {
	let cardMeanings = {
		0: {
			title: 'THE FOOL',
			upright: 'Beginnings, innocence, spontaneity, a free spirit',
			reversed: 'Naivety, foolishness, recklessness, risk-taking'
		},
		1: {
			title: 'MAGICIAN',
			upright: 'Power, skill, concentration, action, resourcefulness',
			reversed: 'Manipulation, poor planning, latent talents',
		},
		2: {
			title: 'HIGH PRIESTESS',
			upright: 'Intuition, Higher powers, mystery, subconscious mind',
			reversed: 'Hidden agendas, need to listen to inner voice',
		},
		3: {
			title: 'EMPRESS',
			upright: 'Fertility, femininity, beauty, nature, abundance',
			reversed: 'Creative block, dependence on others'
		},
		4: {
			title: 'EMPEROR',
			upright: 'Authority, father-figure, structure, solid foundation',
			reversed: 'Domination, excessive control, rigidity, inflexibility',
		},
		5: {
			title: 'HIEROPHANT',
			upright: 'Religion, group identification, conformity, tradition, beliefs',
			reversed: 'Restriction, challenging the status quo',
		},
		6: {
			title: 'LOVERS',
			upright: 'Love, union, relationships, values alignment, choices',
			reversed: 'Disharmony, imbalance, misalignment of values'
		},
		7: {
			title: 'CHARIOT',
			upright: 'Control, will power, victory, assertion, determination',
			reversed: 'Lack of control and direction, aggression',
		},
		8: {
			title: 'STRENGTH',
			upright: 'Strength, courage, patience, control, compassion',
			reversed: 'Weakness, self-doubt, lack of self-discipline',
		},
		9: {
			title: 'HERMIT',
			upright: 'Soul-searching, introspection, being alone, inner guidance',
			reversed: 'Isolation, loneliness, withdrawal'
		},
		10: {
			title: 'WHEEL OF FORTUNE',
			upright: 'Good luck, karma, life cycles, destiny, a turning point',
			reversed: 'Bad luck, negative external forces, out of control',
		},
		11: {
			title: 'JUSTICE',
			upright: 'Justice, fairness, truth, cause and effect, law',
			reversed: 'Unfairness, lack of accountability, dishonesty'
		},
		12: {
			title: 'HANGED MAN',
			upright: 'Suspension, restriction, letting go, sacrifice',
			reversed: 'Martyrdom, indecision, delay'
		},
		13: {
			title: 'DEATH',
			upright: 'Endings, beginnings, change, transformation, transition',
			reversed: 'Resistance to change, unable to move on',
		},
		14: {
			title: 'TEMPERANCE',
			upright: 'Balance, moderation, patience, purpose, meaning',
			reversed: 'Imbalance, excess, lack of long-term vision',
		},
		15: {
			title: 'DEVIL',
			upright: 'Bondage, addiction, sexuality, materialism',
			reversed: 'Detachment, breaking free, power reclaimed'
		},
		16: {
			title: 'TOWER',
			upright: 'Disaster, upheaval, sudden change, revelation',
			reversed: 'Avoidance of disaster, fear of change',
		},
		17: {
			title: 'STAR',
			upright: 'Hope, spirituality, renewal, inspiration, serenity',
			reversed: 'Lack of faith, despair, discouragement',
		},
		18: {
			title: 'MOON',
			upright: 'Illusion, fear, anxiety, insecurity, subconscious',
			reversed: 'Release of fear, unhappiness, confusion'
		},
		19: {
			title: 'SUN',
			upright: 'Fun, warmth, success, positivity, vitality',
			reversed: 'Temporary depression, lack of success',
		},
		20: {
			title: 'JUDGEMENT',
			upright: 'Judgement, rebirth, inner calling, absolution',
			reversed: 'Self-doubt, refusal of self-examination',
		},
		21: {
			title: 'WORLD',
			upright: 'Completion, integration, accomplishment, travel',
			reversed: 'Lack of completion, lack of closure',
		}
	};

	return cardMeanings[number];
}
