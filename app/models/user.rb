# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)      not null
#  email           :string(255)      not null
#  password_digest :string(255)      not null
#  token           :string(255)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_accessible :email, :password, :username

  has_secure_password

  validates :email, :username, :password_digest, presence: true
  validates :username, uniqueness: true

  has_many :projects, dependent: :destroy
  has_many :project_types, 
    class_name: "Type", 
    dependent: :destroy
  has_many :steps, through: :projects

  def verify_password(password)
    BCrypt::Password.new(self.password_digest) == password
  end

  def user_types
    Type.where(user_id: [nil, self.id]).all
  end
end
