# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Tweet.destroy_all
User.destroy_all

User.create([
  {
    name: 'Christian',
    email: 'kring.vonlehe@gmail.com',
    password: 'christian9',
  },
  {
    name: 'Shaun',
    email: 'shaun@gmail.com',
    password: 'shaun',
  },
  {
    name: 'Brian',
    email: 'brian@gmail.com',
    password: 'brian',
  }
])


50.times do
  Tweet.create!({
    content: Faker::Lorem.sentence,
    user_id: User.all.ids.sample,
    public: true
  })

end

puts "Created #{User.count} users and #{Tweet.count} tweets."
