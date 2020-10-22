import React from 'react';
import styled from 'styled-components';
import ErrorState from '../../assets/error-state.png';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: baseline;
	justify-content: center;
	background-color: #f5f5f5;
	position: absolute;
	height: 55%;
	top: 45%;
`;

const Img = styled.img`
	width: 350px;
`;

const Text = styled.h4`
	position: absolute;
	top: -15%;
	text-align: center;
	font-size: 17px;
	width: 80%;
`;

const SubText = styled(Text)`
	font-size: 22px;
	top: 60%;
`;

const NoMatchSearch = () => {
	return (
		<Wrapper>
			<Img src={ErrorState} alt='error' />
			<Text data-testid='error-item-id'>
				Chuck Norris laughed so hard, that he broke the page.
			</Text>
			<SubText>Try Again Later!</SubText>
		</Wrapper>
	);
};

export default NoMatchSearch;
