import { createSlice } from '@reduxjs/toolkit';
import {
	fetchCategories,
	fetchJokeByCategory,
	fetchJokeByText,
} from '../utils/transporter';
import { MIN_CHARS_SEARCH, LOADING, SUCCESS, ERROR } from '../constants';
import parseAPIStatus from '../utils/parse-api-status';

export const jokesSlice = createSlice({
	name: 'jokes',
	initialState: {
		categories: [],
		joke: {},
		jokesList: [],
		fetchCategoriesStatus: '',
		fetchJokeByCategoryStatus: '',
		fetchJokeByTextStatus: '',
	},
	reducers: {
		categories: (state, action) => {
			state.categories = action.payload;
		},
		jokeByCategory: (state, action) => {
			state.joke = action.payload;
		},
		jokeByText: (state, action) => {
			state.jokesList = action.payload.result;
		},
		requestCategoriesStatus: (state, action) => {
			state.fetchCategoriesStatus = action.payload;
		},
		requestJokeByCategoryStatus: (state, action) => {
			state.fetchJokeByCategoryStatus = action.payload;
		},
		requestJokeByTextStatus: (state, action) => {
			state.fetchJokeByTextStatus = action.payload;
		},
	},
});

export const {
	categories,
	jokeByCategory,
	jokeByText,
	requestCategoriesStatus,
	requestJokeByCategoryStatus,
	requestJokeByTextStatus,
} = jokesSlice.actions;

export const requestCategories = () => async (dispatch) => {
	try {
		dispatch(requestCategoriesStatus(LOADING));
		const results = await fetchCategories();
		dispatch(requestCategoriesStatus(SUCCESS));
		dispatch(categories(results));
	} catch (err) {
		console.error('fail category request');
		dispatch(requestCategoriesStatus(ERROR));
	}
};

export const requestJokeByCategory = (category) => async (dispatch) => {
	try {
		dispatch(requestJokeByCategoryStatus(LOADING));
		const results = await fetchJokeByCategory(category);
		dispatch(requestJokeByCategoryStatus(SUCCESS));
		dispatch(jokeByCategory(results));
	} catch (err) {
		console.error('fail joke by category request');
		dispatch(requestJokeByCategoryStatus(ERROR));
	}
};

export const requestJokeByText = (searchText) => async (dispatch) => {
	if (searchText.length < MIN_CHARS_SEARCH) return null;
	try {
		dispatch(requestJokeByTextStatus(LOADING));
		const results = await fetchJokeByText(searchText);
		dispatch(requestJokeByTextStatus(SUCCESS));
		dispatch(jokeByText(results));
	} catch (err) {
		dispatch(requestJokeByTextStatus(ERROR));
		console.error('fail joke by text request');
	}
};

export const getJokes = (state) => state.jokes;
export const getAllCategories = (state) => getJokes(state).categories;
export const getJokeByCategory = (state) => getJokes(state).joke;
export const getJokesList = (state) => getJokes(state).jokesList;
export const getCategoryStatus = (state) =>
	parseAPIStatus(getJokes(state).fetchCategoriesStatus);
export const getJokeByCategoryStatus = (state) =>
	parseAPIStatus(getJokes(state).fetchJokeByCategoryStatus);
export const getJokeByTextStatus = (state) =>
	parseAPIStatus(getJokes(state).fetchJokeByTextStatus);

export default jokesSlice.reducer;
