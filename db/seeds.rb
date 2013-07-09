# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Status.create({ name: "Not started" })
Status.create({ name: "In progress" })
Status.create({ name: "On hold" })
Status.create({ name: "Completed" })

Type.create({ name: "Bike" })
Type.create({ name: "DIY" })
Type.create({ name: "Home" })
Type.create({ name: "Jewelry" })
Type.create({ name: "Papercraft" })
Type.create({ name: "Sewing" })