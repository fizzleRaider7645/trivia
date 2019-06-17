const initial = []
export default (state = initial, action) => {
    switch(action.type) {
        case 'GET_EASY_QUESTIONS':
            return action.payload;
        case 'GET_MEDIUM_QUESTIONS':
            return action.payload;
        case 'GET_HARD_QUESTIONS':
            return action.payload
        default:
            return state;
    }
}