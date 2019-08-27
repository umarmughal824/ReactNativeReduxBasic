import * as types from '../constants';

export const incrementCounter = payload => ({
    type: types.INCREMENT_COUNTER,
    payload,
});

export const decrementCounter = payload => ({
    type: types.DECREMENT_COUNTER,
    payload,
})