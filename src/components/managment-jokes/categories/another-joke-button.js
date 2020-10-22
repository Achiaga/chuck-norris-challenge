import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
	border-radius: 5px;
	padding: 0.4em;
	background: white;
	border: 1px solid #444;
	color: #444;
	font-size: 16px;
	font-weight: 700;
	font-family: sans-serif;
	box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
`;

const AnotherJokeButton = ({ handleAnotherJoke }) => {
	return (
		<Button
			data-qa='another-joke-button'
			data-testid={`another-joke-button`}
			onClick={handleAnotherJoke}>
			Another joke
		</Button>
	);
};

AnotherJokeButton.propTypes = {
	handleAnotherJoke: PropTypes.func,
};

export default AnotherJokeButton;
