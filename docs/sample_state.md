```js
{
  currentUser: {
    id: 1,
    username: "Guest"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: ['Invalid credentials']},
    createNote: {errors: ["body can't be blank"]},
    createNotebook: {errors: ["title can't be blank"]}
  },
  notes: {
    1: {
      title: "First Note!",
      body: "Let's get this project done!",
      author_id: 1,
      notebook_id: 1
      tags: {
        1: {
          id: 1
          topic: "finalproject"
        }
      }
    }
  },
  notebooks: {
    1: {
      title: "App Academy",
      author_id: 1,
      description: "final project progress"
      image_url: "http://haseebq.com/wordpress/wp-content/uploads/2015/05/aa.png"
    }
  }
  tagFilters: []
}
```
