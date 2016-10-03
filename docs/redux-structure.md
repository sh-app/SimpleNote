# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `LoginForm` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `SidebarNav` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` resets to default application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Note Cycles

### Notes API Request Actions

* `fetchAllNotes`
  0. invoked from `NotesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/notes` is called.
  0. `receiveAllNotes` is set as the success callback.

* `createNote`
  0. invoked from `NoteForm` `onSubmit`.
  0. `POST /api/notes` is called.
  0. `receiveNote` is set as the success callback.

* `fetchNote`
  0. invoked from `NoteForm` `didMount`/`willReceiveProps` (if route params note id is defined)
  0. `GET /api/notes/:id` is called.
  0. `receiveNote` is set as the success callback.

* `updateNote`
  0. invoked from `NoteForm` `onSubmit` (if route params note id is defined)
  0. `PATCH /api/notes/:id` is called.
  0. `receiveNote` is set as the success callback.

* `destroyNote`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/notes/:id` is called.
  0. `removeNote` is set as the success callback.

### Notes API Response Actions

* `receiveAllNotes`
  0. invoked from an API callback
  0. the `NoteReducer` updates `notes` in the application's state.

* `receiveNote`
  0. invoked from an API callback
  0. the `NoteReducer` updates `notes[id]` in the application's state.

* `removeNote`
  0. invoked from an API callback
  0. the `NoteReducer` removes `notes[id]` from the application's state.

## Notebook Cycles

### Notebook API Request Actions

* `fetchAllNotebooks`
  0. invoked from `NotebooksIndex` `didMount`/`willReceiveProps`
  0. `GET /api/collections` is called.
  0. `receiveAllNotebooks` is set as the success callback.

* `createNotebook`
  0. invoked from `NotebookForm` `onSubmit`.
  0. `POST /api/notebooks` is called.
  0. `receiveNotebook` is set as the callback.

* `updateNotebook`
  0. invoked from `NotebookForm` `onSubmit` (if route params collection id is defined)
  0. `PATCH /api/notebooks/:id` is called.
  0. `receiveNotebook` is set as the success callback.

* `destroyNotebook`
  0. invoked from delete notebook button `onClick`
  0. `DELETE /api/notebooks/:id` is called.
  0. `removeNotebook` is set as the success callback.

### Notebooks API Response Actions

* `receiveAllCNotebooks`
  0. invoked from an API callback.
  0. The `NotebookReducer` updates `notebooks` in the application's state.

* `receiveNotebook`
  0. invoked from an API callback.
  0. The `NotebookReducer` updates `notebooks[id]` in the application's state.

* `removeNotebook`
  0. invoked from an API callback.
  0. The `NotebookReducer` removes `notebooks[id]` from the application's state.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when there is text
  0. `GET /api/notes` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. The `SearchSuggestion` reducer updates `suggestions` in the application's state.

* `removeSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when empty
  0. The `SearchSuggestion` reducer resets `suggestions` in the application's state.
