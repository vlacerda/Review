export const ADD_CARD = 'main.ADD_FLASH_CARD';
export const AddCardAction = (state) => {
    return Object.assign({
      type: ADD_CARD
    }, state);    
}