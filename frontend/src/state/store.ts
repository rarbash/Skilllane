import { applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import rootReducer  from './index'
import {composeWithDevTools} from 'redux-devtools-extension'
import { type } from 'os'

const middleware = [thunk]

// export const store = legacy_createStore(rootReducer,{}, composeWithDevTools(applyMiddleware(...middleware)))
const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>;

export default store;