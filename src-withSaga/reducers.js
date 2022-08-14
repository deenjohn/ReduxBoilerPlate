import { ACTIONS_TYPES} from "./actions/types";
const initialStateCounter = {
  isLoading: false,
  count: 0
};

export const counterReducer = (state=initialStateCounter , action) => {
    switch (action.type) {
      case ACTIONS_TYPES.INC:
        return {
          isLoading: false,
          count: state.count + 1
        };
      case ACTIONS_TYPES.DEC:
        return {
          isLoading: false,
          count: state.count - 1
        };
      case ACTIONS_TYPES.LOADING:
        return {
          ...state,
          isLoading: true,
        };
      case 'TestNonSaga':
        console.log('TestNonSaga recieved by reducer')
      default:
        return state;
    }
}; 


