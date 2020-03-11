import { combineReducers } from 'redux';
import { counter } from './counter-with-slicer/action-reducer-selector';
import { counter as manualCounter } from './counter-without-slicer/reducer';

export default combineReducers({
  counter: counter.reducer,
  manualCounter
});
