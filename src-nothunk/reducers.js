const initialStateCounter = {
  isLoading: false,
  count: 0
};

export const counterReducer = (state=initialStateCounter , action) => {
    switch (action.type) {
      case 'INC':
        return {
          isLoading: false,
          count: state.count + 1
        };
      case 'DEC':
        return {
          isLoading: false,
          count: state.count - 1
        };
      case 'LOADING':
        return {
          ...state,
          isLoading: true,
        };
      default:
        return state;
    }
}; 


