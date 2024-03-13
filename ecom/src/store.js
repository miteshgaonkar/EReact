import {createStore,combineReducers,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
//import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducer,productDetailsReducer} from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducers';
import {composeWithDevTools} from '@redux-devtools/extension';

const reducer =combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')?
JSON.parse(localStorage.getItem('cartItems')): []

const initailState = {
    cart:{cartItems:cartItemsFromStorage}
}
const middleware=[thunk]
const store = createStore(reducer,initailState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;