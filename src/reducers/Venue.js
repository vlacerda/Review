const SEARCH_VENUE = 'main.SEARCH_VENUE';
const VenueReducer = (state = [], action) => {
    console.log(action.type ,state);

    switch (action.type) {
        case SEARCH_VENUE:
            return [...state, {
                id: action.id,
                text: action.text
            }];    
        default:
            return state;
    }

}

export default VenueReducer;