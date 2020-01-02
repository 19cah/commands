import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Colorized = ({children: title}) => <span> {title}</span>;
const Normal = ({children: title}) => ` ${title}`;

const colorize = (sentence, matchWord) => {
	return sentence.split(' ').map((word, idx) => {
		const match = word.toLocaleLowerCase().includes(matchWord);

		return <Fragment key={idx}>{match ? <Colorized>{word}</Colorized> : <Normal>{word}</Normal>}</Fragment>;
	});
};

export default function Colorize({children: string, word}) {
	return <div>{colorize(string, word)}</div>;
}

Colorize.propTypes = {
	children: PropTypes.string.isRequired,
	word: PropTypes.string.isRequired
};

Colorized.propTypes = {
	children: PropTypes.string.isRequired
};

Normal.propTypes = {
	children: PropTypes.string.isRequired
};

