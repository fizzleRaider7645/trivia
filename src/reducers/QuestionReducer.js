const initial = []
export default (state = initial, action) => {
    switch(action.type) {
        case 'GET_USER':
        return action.payload;
        default:
            return state;
    }
}