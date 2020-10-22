import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	line-height: 40px;
	padding: 1em 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: black;
	background-color: tomato;
`;

const Title = styled.h4`
	font-size: 25px;
	width: 78%;
	text-align: center;
	font-family: 'Press Start 2P', cursive;
	letter-spacing: 2px;
	word-spacing: -8px;
	font-weight: 900;
	padding: 0;
	margin: 0;
	@media only screen and (max-width: 400px) {
		font-size: 18px;
		width: 90%;
	}
	@media only screen and (max-width: 370px) {
		font-size: 14px;
		width: 95%;
	}
`;

const Header = () => {
	return (
		<Wrapper>
			<Title>CHUCK NORRIS JOKES</Title>
		</Wrapper>
	);
};

export default Header;
