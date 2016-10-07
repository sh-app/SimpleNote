export const create = (note, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/notes',
    data: note,
    success,
    error
  });
};

export const edit = (note, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/notes/${note.id}`,
    data: note,
    success,
    error
  });
};

export const destroy = (note_id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/notes/${note_id}`,
    success,
    error
  });
};

export const getNote = (note_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/notes/${note_id}`,
    data: author_id,
    success,
    error
  });
};

export const getNotes = (author_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/notes`,
    data: author_id,
    success,
    error
  });
};
