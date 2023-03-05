import { createStore } from "redux";

// combine store
import { combineReducers } from "redux";

const initialState = {
    loading: false,
    error: null,
    blogs: [],
    activeBlog: {}
};

const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LOADING":
      return { ...state,loading:true };
    case "FETCH_ERROR":
      return { ...state,error: true};
    case "FETCH_SUCCESS":
      return { ...state, loading: false,blogs: action.payload };
    case "FETCH_SINGLE_BLOG":
      return { ...state,loading: false,activeBlog: action.payload};
    case "FETCH_CLEAN_UP":
      return { ...state,activeBlog:{}};
    default:
      return state;
  }
};

const Allreducers = combineReducers({
    blogsReducer,
});
const store = createStore(Allreducers);

export default store;

//state management library
