import { combineReducers } from 'redux';
import pedReducer from './pedReducer';
import dailyPedReducer from './dailyPedReducer';
import tamponReducer from './tamponReducer';

const rootReducer = combineReducers({
  ped: pedReducer,
  dailyPed: dailyPedReducer,
  tampon: tamponReducer,
});

export default rootReducer;
