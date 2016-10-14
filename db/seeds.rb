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

author1 = User.create!(username: "guest", email: "guest-user@test.com", password: "password")
author2 = User.create!(username: "user1", email: "user1@test.com", password: "password")
author3 = User.create!(username: "app_student", email: "app_student@test.com", password: "password")

notebook1 = author1.notebooks.create!(title: "Class", description: "important stuff from class")
notebook2 = author1.notebooks.create!(title: "Homework", description: "daily reports")
notebook3 = author1.notebooks.create!(title: "Exam Prep", description: "things to study")
author3.notebooks.create!(title: "Class", description: "important stuff from class")
author1.notebooks.create!(title: "Homework", description: "daily reports")
author1.notebooks.create!(title: "Exam Prep", description: "things to study")

notebook1.notes.create!(title: "References", body: "<div>In the Ruby language variables hold references to objects.  One point is that = does not mutate (modify) an object; it merely reassigns the variable so that it now refers to a new object.</div>", author_id: author1.id)
notebook1.notes.create!(title: "Array Methods", body: "<div>Ruby array methods include: </div>", author_id: author1.id)
notebook1.notes.create!(title: "Mutable vs Immutable", body: "<div>The Fixnum and Float classes are called immutable. None of their methods modify data inside the Fixnum/Float; they produce new values instead. nil is another example.</div>", author_id: author1.id)
notebook3.notes.create!(title: "Review sorting algorithms", body: "<div>Merge sort, Bubble sort, Quicksort</div>", author_id: author1.id)
notebook2.notes.create!(title: "Javascript hw assignment", body: "<div>install latest version of node!</div>", author_id: author1.id)
