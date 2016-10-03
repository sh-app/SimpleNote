##Component Hierarchy

`SignupAuthFormComponent`

`LoginAuthFormComponent`

###HomeContainer
  `  SidebarNav`
  -SearchComponent

  `NoteContainer`
    *NotesHeader
    *NotesIndex
      - NoteIndexItems
      - NoteDetail
        - NoteMenu
          - Notebook
            - NotebookSelect
            - NewNotebook
          - Tags
            - Tag
        - Note

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
    + AuthorInformation (name, location, organization)
    + Change (e-mail, password)
  - LogoutButton

##Routes
path='/signup'  ==> SignupAuthForm
path='/login'  ==> LoginAuthForm
path='/home'  ==> HomeContainer
  path='/notes/:noteid' ==> NoteContainer
  path='/notebooks/:notebookid/notes/:noteid' ==> NotebookContainer
  path='/tags/:tagid/notes/:noteid' ==> TagContainer
  path='/search-results/notes/:noteid' ==> SearchResultContainer
path='/newnote' ==> NewNoteContainer
path='/new-notebook' ==> NewNotebook
path='/new-tag' ==> NewTag
path='/notebook-search' ==> NotebookSearchContainer
path='/tag-search' ==> TagSearchContainer
path='/users/:userid' ==> AccountContainer
