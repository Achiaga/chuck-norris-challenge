import React, { useState } from 'react';
import NavbarTab from './navbar-tab/navbar-tab';
import CategoriesJokes from './categories';
import SearchJokes from './search';
import { CATEGORIES, SEARCH } from '../../constants/index';

const JokesManagment = () => {
	const [selectedTab, setsearchByText] = useState(CATEGORIES);

	const handleTypeSearch = (e) => {
		const { id } = e.target;
		if (id === SEARCH) return setsearchByText(SEARCH);
		return setsearchByText(CATEGORIES);
	};

	const SelectedJokeType = {
		[CATEGORIES]: CategoriesJokes,
		[SEARCH]: SearchJokes,
	}[selectedTab];

	return (
		<>
			<NavbarTab
				handleTypeSearch={handleTypeSearch}
				searchByText={selectedTab}
			/>
			<SelectedJokeType />
		</>
	);
};

export default JokesManagment;
