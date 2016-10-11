export const create = (notebook, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/notebooks',
    data: notebook,
    success,
    error
  });
};

export const edit = (notebook, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/notebooks/${notebook.notebook.id}`,
    data: notebook,
    success,
    error
  });
};

export const destroy = (notebook_id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/notebooks/${notebook_id}`,
    success,
    error
  });
};

export const getNotebook = (notebook_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/notebooks/${notebook_id}`,
    success,
    error
  });
};

export const getNotebooks = (success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/notebooks`,
    success,
    error
  });
};
