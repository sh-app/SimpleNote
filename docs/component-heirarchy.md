##Component Hierarchy

`SignupAuthFormComponent`

`LoginAuthFormComponent`

###HomeContainer
  SidebarNav
  SearchComponent

  NoteContainer
    - NotesHeader
    + NotesIndex
      + NoteIndexItems
      + NoteDetail
        + NoteMenu
          + Notebook
            + NotebookSelect
            + NewNotebook
          + Tags
            + Tag
        + Note

  SearchResultContainer    
    - SearchResultHeader
    + NoteIndexItems
    + NoteDetail
      + NoteMenu
        + Notebook
          + NotebookSelect
          + NewNotebook
        + Tags
          + Tag
      + Note

  NotebookContainer
    - NotebookHeader
    - NoteIndexItems
    - NoteDetail
      + NoteMenu
        + Notebook
          + NotebookSelect
          + NewNotebook
        + Tags
          + Tag
      + Note

  TagContainer
    - TagHeader
    - NoteIndexItems
    - NoteDetail
      + NoteMenu
        + Notebook
          + NotebookSelect
          + NewNotebook
        + Tags
          + Tag
      + Note


  NoteBookSearchContainer
    - NoteBookAutoSearch        
    - NewNotebook

  TagSearchContainer
    - TagAutoSearch
    - NewTag

NewNoteContainer  
  - NewNote
    + NewNoteSaveButton
    + Quill Rich Text Formatting toolbar
    + NoteContent

AccountContainer
  - AccountSettings
    + AuthorInformation (name, location, organization, profile picture)
    + Change (e-mail, password)
  - LogoutButton

##Routes
|Path   | Component   |
|-------|-------------|
| '/signup' | SignupAuthForm |
| '/login' | LoginAuthForm |
| '/home' | HomeContainer |
| '/notes/:noteid | NoteContainer |
| '/notebooks/:notebookid/notes/:noteid | NotebookContainer |
| '/tags/:tagid/notes/:noteid | TagContainer |
| '/search-results/notes/:noteid | SearchResultContainer |
| '/newnote | NewNoteContainer |
| '/new-notebook | NewNotebook |
| '/new-tag | NewTag |
| '/notebook-search | NotebookSearchContainer |
| '/tag-search | TagSearchContainer |
| '/users/:userid | AccountContainer |
