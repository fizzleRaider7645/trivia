import * as types from '../actions/ActionTypes'
const initial = []
export default (state = initial, action) => {
    switch(action.type) {
        case types.GET_EASY_QUESTIONS:
            return action.payload;
        case types.GET_MEDIUM_QUESTIONS:
            return action.payload;
        case types.GET_HARD_QUESTIONS:
            return action.payload
        default:
            return state;
    }
}