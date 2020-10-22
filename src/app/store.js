import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import jokesSlice from '../features/jokesSlice';

const middleware = [...getDefaultMiddleware()];
if (process.env.NODE_ENV !== 'production') middleware.push(logger);

export default configureStore({
	reducer: {
		jokes: jokesSlice,
	},
	devTools: process.env.NODE_ENV !== 'production',
	middleware,
});
