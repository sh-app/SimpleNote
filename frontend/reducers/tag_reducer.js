import { RECEIVE_ALL_TAGS } from '../actions/tag_actions';
import merge from 'lodash/merge';

const defaultState = {
  allTags: []
};

const TagReducer = (state=defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      return merge({}, state, {allTags: action.tags});

    default:
      return state;

  }
};

export default TagReducer;
