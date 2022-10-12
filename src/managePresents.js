const initialState = { numberOfPresents: 0 };

export function managePresents(state = initialState, action) {
  // your code here
  
  // presents/increase to increase state by 1

  switch(action.type){
    case "presents/increase":
      return { numberOfPresents: state.numberOfPresents + 1 };
    default:
      return state;
  }

}
