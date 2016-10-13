import {
  CREATE_TAG,
  REMOVE_TAG,
  GET_ALL_TAGS,
  getAllTags,
  receiveErrors,
  receiveAllTags
} from '../actions/tag_actions';

import { create, remove, getTags } from '../util/tags_api_util';

const TagMiddleware = ({ getState, dispatch }) => next => action => {

  const error = (error) => dispatch(receiveErrors(error.responseJSON))

  switch (action.type) {

    case CREATE_TAG:
      create(action.tag, () => dispatch(getAllTags()), error);

    case REMOVE_TAG:
      create(action.tag, () => dispatch(getAllTags()), error);

    case GET_ALL_TAGS:
      getTags((tags) => dispatch(receiveAllTags(tags)), error);
      return next(action);

    default:
      return next(action);

  }
};

export default TagMiddleware;
