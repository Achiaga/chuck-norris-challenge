import fetchApi from './api';

export const fetchCategories = () => {
	return fetchApi('categories/');
};

export const fetchJokeByCategory = (category) => {
	return fetchApi(`random?category=${category}`);
};

export const fetchJokeByText = (searchText) => {
	return fetchApi(`search?query=${searchText}`);
};
