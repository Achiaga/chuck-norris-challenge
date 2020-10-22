import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loading from '../../loading';
import ErrorPage from '../../error';
import NoMatchSearch from '../../no-match/no-match-search';

const Wrapper = styled.div`
	word-wrap: break-word;
	text-align: justify;
	border: 1px solid black;
	border-radius: 5px;
	width: 80%;
	margin-top: 3em;
	padding: 0.6em 0.8em;
	background-color: #fff6e7;
	z-index: 10;
	max-width: 650px;
`;
const Text = styled.h4`
	color: black;
	line-height: 32px;
	word-spacing: 2px;
	font-size: 18px;
	margin: 0;
	padding: 0;
	font-family: 'Helvetica Neue';
`;

const JokeText = ({ jokeValue, requestStatus = {} }) => {
	const { isLoading, isSuccess, hasError } = requestStatus;

	if (hasError) return <ErrorPage />;

	if (isLoading) return <Loading />;

	if (!jokeValue.value && isSuccess) {
		return <NoMatchSearch />;
	}

	if (!jokeValue.value) return null;

	return (
		<Wrapper>
			<Text data-qa='random-joke' data-testid='joke-value-id'>
				{jokeValue.value}
			</Text>
		</Wrapper>
	);
};

JokeText.propTypes = {
	requestStatus: PropTypes.object,
	jokeValue: PropTypes.object,
};

export default JokeText;
