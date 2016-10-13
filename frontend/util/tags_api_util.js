export const create = (tag, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/tags',
    data: tag,
    success,
    error
  });
};

export const getTags = (success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/tags`,
    success,
    error
  });
};
