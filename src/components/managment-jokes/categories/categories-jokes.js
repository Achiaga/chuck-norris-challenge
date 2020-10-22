import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector, batch } from 'react-redux';
import {
	requestCategories,
	requestJokeByCategory,
	getJokeByCategory,
	getAllCategories,
	getJokeByCategoryStatus,
} from '../../../features/jokesSlice';

import { DEFAULT_CATEGORY } from '../../../constants';
import CategorySelector from './category-selector';
import JokeText from './joke-text';
import AnotheJokeButton from './another-joke-button';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2em 0;
`;

const SelectorWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 75%;
`;

const CategoriesJokes = () => {
	const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);
	const requestStatus = useSelector(getJokeByCategoryStatus);
	const jokeValue = useSelector(getJokeByCategory);
	const listCategories = useSelector(getAllCategories);

	const dispatch = useDispatch();

	useEffect(() => {
		batch(() => {
			dispatch(requestCategories());
			dispatch(requestJokeByCategory(selectedCategory));
		});
	}, []);

	const handleSelectCategory = (value) => {
		setSelectedCategory(value);
		dispatch(requestJokeByCategory(value));
	};

	const handleAnotherJoke = () => {
		dispatch(requestJokeByCategory(selectedCategory));
	};

	return (
		<Wrapper>
			<SelectorWrapper>
				<CategorySelector
					handleSelectCategory={handleSelectCategory}
					selectedCategory={selectedCategory}
					listCategories={listCategories}
				/>
				<AnotheJokeButton handleAnotherJoke={handleAnotherJoke} />
			</SelectorWrapper>
			<JokeText jokeValue={jokeValue} requestStatus={requestStatus} />
		</Wrapper>
	);
};

export default CategoriesJokes;
