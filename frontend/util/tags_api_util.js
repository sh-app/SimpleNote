export const create = (tag, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/tags',
    data: tag,
    error
  });
};

export const remove = (tag, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/tags/${tag.id}`,
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
