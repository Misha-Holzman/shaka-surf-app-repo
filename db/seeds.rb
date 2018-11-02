# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Experience.destroy_all
User.destroy_all
Experience.create([
  { level:'beginner'},
  { level:'intermediate'},
  { level:'advanced'},
])


User.create([
  {
    username: 'misha',
    email: 'mcholzman1@gmail.com',
    tel: '212-999-9999',
    password: 'baseball',
    experience_id: 3,
    contact: true,
  },
  {
    username: 'shaun',
    email: 'shaun@gmail.com',
    tel: '212-888-8888',
    password: 'shaun',
    experience_id: 2,
    contact: true,
  },
  {
    username: 'brian',
    email: 'brian@gmail.com',
    tel: '212-777-7777',
    password: 'brian',
    experience_id: 1,
    contact: false,
  }
])




puts "Created #{User.count} users and #{Experience.count} experience."
