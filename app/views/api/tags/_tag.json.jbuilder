json.extract! tag, :id, :author_id, :name
json.notes tag.notes do |note|
  json.partial! "api/notes/note", note: note
end
