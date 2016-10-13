export const CREATE_TAG = 'CREATE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const GET_ALL_TAGS = 'GET_ALL_TAGS';
export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const createTag = (tag) => ({
  type: CREATE_TAG,
  tag
});

export const removeTag = (tag) => ({
  type: REMOVE_TAG,
  tag
});
export const getAllTags = () => ({
  type: GET_ALL_TAGS,
});

export const receiveAllTags = (tags) => ({
  type: RECEIVE_ALL_TAGS,
  tags
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
