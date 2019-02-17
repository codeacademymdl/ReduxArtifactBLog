const addCard = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BLOG':
          return state.concat([action.payload]);
        case 'ADD_CARDS':
          return state.concat(action.payload);
        default:
          return state;
      }
};

export default addCard;

