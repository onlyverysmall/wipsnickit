# == Schema Information
#
# Table name: projects
#
#  id              :integer          not null, primary key
#  title           :string(255)      not null
#  type_id         :integer          not null
#  user_id         :integer          not null
#  status_id       :integer          default(1), not null
#  completion_date :date
#  notes           :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Project < ActiveRecord::Base
  attr_accessible :title, :type_id, :user_id, :status_id, :completion_date, :notes, :steps_attributes

  default_scope order('completion_date ASC')

  validates :title, :type_id, :user_id, :status_id, presence: true

  belongs_to :type
  belongs_to :status
  belongs_to :user
  has_many :steps, inverse_of: :project

  accepts_nested_attributes_for :steps, 
    reject_if: :all_blank, 
    allow_destroy: true 
end
