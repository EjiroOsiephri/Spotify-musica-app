import { createStore } from 'redux';

const initialState = {
   music: null,
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'SET_MUSIC':
         return { ...state, music: action.payload };
      default:
         return state;
   }
};

const store = createStore(reducer);

export default store;