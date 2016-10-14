# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Notebook.destroy_all
Note.destroy_all
Tag.destroy_all
Tagging.destroy_all

User.create(username: "guest", email: "guest-user@test.com", password: "password")
User.create(username: "user1", email: "user1@test.com", password: "password")
User.create(username: "app_student", email: "app_student@test.com", password: "password")

Notebook.create(title: "Class", description: "important stuff from class", author_id: 1)
Notebook.create(title: "Homework", description: "daily reports", author_id: 1)
Notebook.create(title: "Exam Prep", description: "things to study", author_id: 1)
Notebook.create(title: "Class", description: "important stuff from class", author_id: 3)
Notebook.create(title: "Homework", description: "daily reports", author_id: 3)
Notebook.create(title: "Exam Prep", description: "things to study", author_id: 3)

Note.create(title: "References", body: "In the Ruby language variables hold references to objects.  One point is that = does not mutate (modify) an object; it merely reassigns the variable so that it now refers to a new object.", author_id: 1, notebook_id: 1)
Note.create(title: "Array Methods", body: "Ruby array methods include: ", author_id: 1, notebook_id: 1)
Note.create(title: "Mutable vs Immutable", body: "The Fixnum and Float classes are called immutable. None of their methods modify data inside the Fixnum/Float; they produce new values instead. nil is another example.", author_id: 1, notebook_id: 1)
Note.create(title: "Review sorting algorithms", body: "Merge sort, Bubble sort, Quicksort", author_id: 1, notebook_id: 3)
Note.create(title: "Javascript hw assignment", body: "install latest version of node!", author_id: 1, notebook_id: 2)
