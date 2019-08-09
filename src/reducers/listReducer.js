

const initialState = {
    lists: [],
    isFetching: false,
    error: undefined
}

export default function lists(state = initialState, action) {

    switch (action.type) {
        case 'GETLISTS_REQUEST':
            return Object.assign({}, state, {
                isFetching: true
            })
        case 'GET_LISTS':
            return Object.assign({}, state, {
                isFetching: false,
                lists: action.lists
            });
        case 'GET_LISTS_SUCCESS':
            // Providing error message to state, to be able display it in UI.
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            });
        default:
            return state
    }
}