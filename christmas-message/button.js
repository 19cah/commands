import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
	return <button {...props}>{props.title ? props.title : props.children}</button>;
}

Button.propTypes = {
	children: PropTypes.string,
	title: PropTypes.string
};

Button.defaultProps = {
	children: '',
	title: ''
};
