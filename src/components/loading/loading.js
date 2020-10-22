import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
to { -webkit-transform: rotate(360deg); } 
`;

const Wrapper = styled.div`
	margin: 3em 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

const Spinner = styled.div`
	display: inline-block;
	width: 75px;
	height: 75px;
	border: 7px solid #ffc1b6;
	border-radius: 50%;
	border-top-color: tomato;
	animation: ${spin} 1s ease-in-out infinite;
`;

const Loading = () => {
	return (
		<Wrapper>
			<Spinner data-testid='loading-item-id' />
		</Wrapper>
	);
};

export default Loading;
