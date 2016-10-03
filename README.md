# SimpleNote

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: https://simplenote-dev.herokuapp.com/

## Minimum Viable Product

SimpleNote will be a single-page web application inspired by Evernote built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Notes
- [ ] Notebooks as collections of notes
- [ ] Tags
- [ ] Rich Text Editing
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-heirarchy.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Notes Model, API, and components (2 days)

**Objective:** Notes can be created, read, edited and destroyed through
the API.

- [ ] `Note` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for notes (`NotesController`)
- [ ] JBuilder views for notes
- Note components and respective Redux loops
  - [ ] `NotesIndex`
  - [ ] `NoteIndexItem`
  - [ ] `NoteForm`
- [ ] Autosave notes feature
- [ ] Style notes components
- [ ] Seed notes

### Phase 3: Allow Complex Styling in Notes (2 days)

**objective:** Allow rich text editing of notes.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Rails helpers to sanitize HTML before rendering.
- [ ] Style Quill components.
- [ ] Add Quill styling to seeded notes

### Phase 4: Notebooks (2 days)

**Objective:** Notes belong to Notebooks that can be created, read, edited and destroyed through the API.

- [ ] `Notebook` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for notes (`NotebooksController`)
- [ ] JBuilder views for notebooks
- [ ] Adding notes requires a notebook
- [ ] Moving notes between notebooks
- [ ] Viewing notes by notebook
- [ ] Style notebook components
- [ ] Seed notebooks

### Phase 5: Tags (1 day)

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

- [ ] `Tag` model and `Taggings` join table
- [ ] Fetching tags for notes
- [ ] Adding tags to notes
- [ ] Searching notes by tag
- [ ] Style search & tag components
- [ ] Seed tags with seed data

###Phase 6: Autosave (1 day)

**Objective:** Previous notes are saved as soon as they are edited, without the need to click the 'update' button.

- [ ] Notes are saved realtime as they are being edited.
- [ ] Update button becomes disabled after each save, signaling a successfull update to the user.

### Bonus Features (TBD)
- [ ] Search notes by content, author name, location.
- [ ] E-mail verification of signup and password change.
- [ ] Allow public/private notes.
- [ ] Share notes via e-mail or link.
- [ ] Allow users to set up subscriptions for specific public notebooks  or to notebooks belonging to other users of the same organizaiton.
- [ ] Enable a rating system for individual notes.
