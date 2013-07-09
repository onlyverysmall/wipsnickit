# == Schema Information
#
# Table name: types
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Type < ActiveRecord::Base
  attr_accessible :name, :user_id

  validates :name, presence: true

  has_many :projects
  belongs_to :user
end
