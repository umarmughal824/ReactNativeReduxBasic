import * as types from '../constants';

const initialState = {
    counter: 0,
    // data: [],
    isAuth: false,
}

// reducer is a pure fucntcion
export default (state = initialState, action) => {
    switch(action.type){
        case types.INCREMENT_COUNTER:
            return {...state, counter: state.counter + 1};
        case types.DECREMENT_COUNTER:
            return {...state, counter: state.counter - 1};
        default:
            return state;
    }
}