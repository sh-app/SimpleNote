json.extract! note, :id, :author_id, :notebook_id, :title, :body
json.updated_at time_ago_in_words(note.updated_at)
json.notebook_title note.notebook.title
