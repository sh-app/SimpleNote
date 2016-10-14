json.extract! notebook, :id, :author_id, :title, :description
json.updated_at time_ago_in_words(notebook.updated_at)
json.notes notebook.notes do |note|
  json.partial! "api/notes/note", note: note
end
