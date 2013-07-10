class Project < ActiveRecord::Base
  attr_accessible :title, :type_id, :user_id, :status_id, :completion_date, :notes 

  validates :title, :type_id, :user_id, :status_id, presence: true

  belongs_to :type
  belongs_to :status
  belongs_to :user
  
end