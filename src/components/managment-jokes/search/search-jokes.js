import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	requestJokeByText,
	getJokesList,
	getJokeByTextStatus,
} from '../../../features/jokesSlice';

import SearchInput from './search-input';
import ResultList from './result-list';
import useDebounce from '../../../utils/use-debounce';

const SearchJokes = () => {
	const [searchJokeValue, setJokeSearchValue] = useState('');
	const requestStatus = useSelector(getJokeByTextStatus);
	const debouncedSearchTerm = useDebounce(searchJokeValue, 500);

	const dispatch = useDispatch();

	const listJokes = useSelector(getJokesList);
	const totalNumJokes = Object.keys(listJokes).length;

	useEffect(() => {
		if (debouncedSearchTerm) {
			dispatch(requestJokeByText(searchJokeValue));
		}
	}, [debouncedSearchTerm]);

	const handleSearchInput = (e) => {
		const { value } = e.target;
		setJokeSearchValue(value);
	};

	return (
		<>
			<SearchInput
				handleSearchInput={handleSearchInput}
				searchJokeValue={searchJokeValue}
			/>
			<ResultList
				listJokes={listJokes}
				totalNumJokes={totalNumJokes}
				requestStatus={requestStatus}
			/>
		</>
	);
};

export default SearchJokes;
