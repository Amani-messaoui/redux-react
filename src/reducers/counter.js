const initialState = {
    count: 0
  };
const reducer = (state= initialState, action) => {
    console.log('reducer', state, action);
    //const store = createStore(reducer);
    //return state;
    
    
      switch(action.type) {
        case 'INCREMENT':
          return {
            count: state.count + 1
          };
        case 'DECREMENT':
          return {
            count: state.count - 1
          };
          default:
            return state;
        }
      
    }
    export default reducer ;