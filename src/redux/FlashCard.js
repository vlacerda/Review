// Actions
export const ADD_CARD = 'main.ADD_FLASH_CARD';


// Action Creators
export const AddCardAction = (newFlashCard) => {
    return {
      type: ADD_CARD,
      newFlashCard
    };
}

const initialState = {
    flashCards: {
        items: [],
        newFlashCard: {
            title: '',
            text: ''
        }
    },

}

// Reducer
export default (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state, 
                flashCards: {
                    items: [
                        ...state.flashCards.items, 
                        {
                            title: action.newFlashCard.title,
                            text: action.newFlashCard.text
                        }
                    ]
                }
            };
        default:
            return state;
    }

}