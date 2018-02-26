import { NOT_FOUND } from 'redux-first-router';

const pageNames = {
    HOME: 'Home',//how the actual componennt is named
    EXPLORE_POSTS: 'Posts',
    [NOT_FOUND]: '404'
};

const initialState = 'Initial State';

export default function reducer(state = initialState, action) {
    return pageNames[action.type] || state;
}