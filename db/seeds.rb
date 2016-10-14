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

User.create(username: "Guest", email: "guest-user@test.com", password: "password")
User.create(username: "user1", email: "user1@test.com", password: "password")
User.create(username: "app_student", email: "app_student@test.com", password: "password")

Notebook.create(title: "Class", description: "important stuff from class", author_id: 3)
Notebook.create(title: "Homework", description: "daily reports", author_id: 3)
