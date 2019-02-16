const addCard = (state = [], action) => {
    switch (action.type) {
      case 'ADD_CARD':
      const newCard=[...state];
      newCard.push(action.payload);
      
        return {
                ...state,
                cards:newCard,
            }
        
     default:
     return state;
    }
  };
  
  export default addCard;
  