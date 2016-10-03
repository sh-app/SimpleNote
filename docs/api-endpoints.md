# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Notes

- `GET /api/notes`
  - Notes index
- `POST /api/notes`
- `GET /api/notes/:id`
- `PATCH /api/notes/:id`
- `DELETE /api/notes/:id`

### Notebooks

- A note's notebook title will be included in the note show template
- `GET /api/notebooks`
- `POST /api/notebooks`
- `GET /api/notebooks/:id`
- `DELETE /api/notebooks/:id`
- `GET /api/notebooks/:id/notes`

### Tags

- A note's tags will be included in the note show template
- `GET /api/tags` : preloaded tag list to autocomplete pre-existing tags
- `POST /api/notes/:note_id/tags`: add new or existing tag to note by topic
- `DELETE /api/notes/:note_id/tags/:tag_topic`: remove tag from note
