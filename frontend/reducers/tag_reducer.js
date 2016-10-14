import {
  RECEIVE_ALL_TAGS,
  RECEIVE_TAG,
  RECEIVE_ERRORS } from '../actions/tag_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentTag: {},
  allTags: []
};

const TagReducer = (state=defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      return merge({}, state, {allTags: action.tags});

    case RECEIVE_TAG:
      const tagIds = state.allTags.map(tag => (tag.id));
      let tags;

      if (tagIds.includes(action.tag.id)) {
        tags = state.allTags.map(tag => (
          tag.id === action.tag.id ? action.tag : tag )
        );
      } else if (action.tag.id) {
        tags = state.allTags;
        tags.unshift(action.tag);
      } else {
        tags = state.allTags;
      }
      return Object.assign({}, state, {allTags: tags, currentTag: action.tag});

    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});

    default:
      return state;

  }
};

export default TagReducer;
