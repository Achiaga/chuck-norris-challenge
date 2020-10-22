import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AutoSizer from 'react-virtualized-auto-sizer';
import DynamicList, { createCache } from 'react-window-dynamic-list';
import NoMatchSearch from '../../no-match/no-match-search';
import NoSearch from '../../no-match/no-search';
import Loading from '../../loading';
import ErrorPage from '../../error';

const Wrapper = styled.div`
	height: calc(100% - 255px);
	z-index: 10;
	padding: 0px 15px;
`;

const CardWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Card = styled.div`
	word-break: break-word;
	border: 1px solid black;
	border-radius: 5px;
	padding: 5px 0px;
	padding-right: 2.5%;
	padding-left: 2.5%;
	background-color: papayawhip;
	width: 95%;
	font-size: 16px;
`;

const Row = ({ index, style, listJokes }) => (
	<pre
		style={{
			whiteSpace: 'inherit',
			marginBottom: '8px',
			backgroundColor: '#fff6e7',
		}}>
		<div style={{ ...style }}>
			<CardWrapper>
				<Card data-qa='searched-joke'>{listJokes[index].value}</Card>
			</CardWrapper>
		</div>
	</pre>
);

const ResultList = ({ listJokes, totalNumJokes, requestStatus }) => {
	const emptyJokeList = totalNumJokes === 0;
	const dynamicListRef = useRef();

	const cache = useState(createCache);

	const { isLoading, isSuccess, hasError } = requestStatus;

	if (hasError) return <ErrorPage />;

	if (isLoading) return <Loading />;

	if (emptyJokeList && isSuccess) {
		return <NoMatchSearch />;
	}

	if (emptyJokeList) {
		return <NoSearch />;
	}

	return (
		<Wrapper data-testid='result-list-id'>
			<AutoSizer>
				{({ height, width }) => (
					<DynamicList
						cache={cache}
						ref={dynamicListRef}
						data={listJokes}
						width={width}
						height={height}>
						{(props) => Row({ ...props, listJokes })}
					</DynamicList>
				)}
			</AutoSizer>
		</Wrapper>
	);
};

ResultList.propTypes = {
	listJokes: PropTypes.array,
	totalNumJokes: PropTypes.number.isRequired,
	requestStatus: PropTypes.object.isRequired,
};

export default ResultList;
