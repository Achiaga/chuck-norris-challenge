import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	position: fixed;
	bottom: 20px;
	left: 50%;
	transform: translate(-50%, 0%);
	padding: 0.4em 1em;
	border-radius: 5px;
	background: white;

	font-family: monospace;
	font-size: 18px;
	font-weight: 900;
	cursor: pointer;
	color: black;
`;

const Loader = ({ handleLoadMore, totalNumJokes }) => {
	if (!totalNumJokes) return null;
	return (
		<Button data-testid='load-recipes-button' onClick={handleLoadMore}>
			LOAD MORE <span role='img' aria-label='gear'></span>⚙️
		</Button>
	);
};

export default Loader;
