import {Map} from 'immutable';

const setState = (state, newState) => state.merge(newState);

export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
  }
  return state;
}
