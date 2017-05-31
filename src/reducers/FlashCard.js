import { ADD_CARD } from '../actions/FlashCard';

const FlashCardReducer = (state = [], action) => {
    
    switch (action.type) {
        case ADD_CARD:
            return [...state, {
                title: action.title,
                text: action.text
            }];    
        default:
            return state;
    }

}

export default FlashCardReducer;