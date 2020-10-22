import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import ResultList from './result-list';
import { Provider } from 'react-redux';
import store from '../../../app/store';

const renderComponent = (props) => {
	return render(
		<Provider store={store}>
			<ResultList {...props} />
		</Provider>
	);
};

const initialProps = {
	listJokes: [
		{
			value: 'This is joke 1',
		},
		{
			value: 'This is joke 2',
		},
	],
	totalNumJokes: 10,
	requestStatus: {
		isLoading: false,
		isSuccess: true,
		hasError: false,
	},
};

const errorHandlingProps = {
	...initialProps.jokeValue,
	totalNumJokes: 0,
	requestStatus: {
		isLoading: false,
		isSuccess: false,
		hasError: true,
	},
};

const loadingHandlingProps = {
	...initialProps.jokeValue,
	totalNumJokes: 0,
	requestStatus: {
		isLoading: true,
		isSuccess: true,
		hasError: false,
	},
};

const notFoundHandlingProps = {
	listJokes: [],
	totalNumJokes: 0,
	requestStatus: {
		isLoading: false,
		isSuccess: true,
		hasError: false,
	},
};

const notSearchHandlingProps = {
	listJokes: [],
	totalNumJokes: 0,
	requestStatus: {
		isLoading: false,
		isSuccess: false,
		hasError: false,
	},
};

const RESULT_LIST_ID = 'result-list-id';
const ERROR_ITEM_ID = 'error-item-id';
const LOADING_ITEM_ID = 'loading-item-id';
const NOT_FOUND_ITEM_ID = 'not-found-item-id';
const NO_SEARCH_ITEM_ID = 'no-search-id';

const getResultListItem = (ID, conditionIndex = 0) => {
	return screen.getAllByTestId(ID)[conditionIndex];
};

describe('result-list', () => {
	it('should display list of jokes', () => {
		renderComponent(initialProps);
		const resultListPage = getResultListItem(RESULT_LIST_ID);
		expect(resultListPage).toBeInTheDocument();
	});
	it('should display error page', () => {
		renderComponent(errorHandlingProps);
		const errorPage = getResultListItem(ERROR_ITEM_ID);
		expect(errorPage).toBeInTheDocument();
	});
	it('should display loading page', () => {
		renderComponent(loadingHandlingProps);
		const LoadingPage = getResultListItem(LOADING_ITEM_ID);
		expect(LoadingPage).toBeInTheDocument();
	});
	it('should display NoMatch page', () => {
		renderComponent(notFoundHandlingProps);
		const NotFoundPage = getResultListItem(NOT_FOUND_ITEM_ID);
		expect(NotFoundPage).toBeInTheDocument();
	});
	it('should display NoSearch page', () => {
		renderComponent(notSearchHandlingProps);
		const NoSearchPage = getResultListItem(NO_SEARCH_ITEM_ID);
		expect(NoSearchPage).toBeInTheDocument();
	});
});
