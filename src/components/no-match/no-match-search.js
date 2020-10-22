import React from 'react';
import styled, { keyframes } from 'styled-components';
import EmptyStateBg from '../../assets/empty-state.png';

const floating = keyframes`
	from { transform: translate(0,  0px); }
	65% { transform: translate(0, -25px); }
	to { transform: translate(0, -0px); }    
`;

const expandShadow = keyframes`
	from { transform: scaleX(0.9); }
	65%  { 
		transform: scaleX(1.2);
		background: #333030b8 ;
	}
	to { transform: scaleX(0.9); }    
`;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: baseline;
	justify-content: center;
	background-color: #f5f5f5;
	position: absolute;
	height: 65%;
	top: 35%;
`;

const Img = styled.img`
	animation-name: ${floating};
	animation-duration: 4s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
`;

const Shadow = styled.div`
	position: fixed;
	top: 72%;
	width: 90px;
	height: 40px;
	background: #333030ed;
	border-radius: 100px / 50px;
	animation-name: ${expandShadow};
	animation-duration: 4s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
`;

const Text = styled.h4`
	position: absolute;
	top: 65%;
	font-size: 24px;
`;

const NoMatchSearch = () => {
	return (
		<Wrapper>
			<Img src={EmptyStateBg} alt='no-match' />
			<Shadow />
			<Text data-testid='not-found-item-id'>Not Match / Not Found.</Text>
		</Wrapper>
	);
};

export default NoMatchSearch;
