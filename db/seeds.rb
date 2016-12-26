# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.destroy_all

decoswap = Project.new
decoswap.name = "Decoswap"
decoswap.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, aut, fuga? Temporibus veniam ipsum labore tempora consequatur culpa necessitatibus officia accusamus, similique, consectetur ratione impedit ex reiciendis fuga esse maiores."
decoswap.url = "www.decoswap.co"
decoswap.involvement = "Lead backend developper"
decoswap.save
