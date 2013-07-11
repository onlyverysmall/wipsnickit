# == Schema Information
#
# Table name: steps
#
#  id              :integer          not null, primary key
#  name            :string(255)      not null
#  project_id      :integer          not null
#  priority_number :integer          not null
#  notes           :text
#  completed       :boolean          default(FALSE), not null
#  completion_date :date
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Step < ActiveRecord::Base
  attr_accessible :name, :project_id, :priority_number, :notes, 
    :completion_date, :completed

  validates :name, :project, :priority_number, presence: true

  belongs_to :project
  has_one :user, through: :project
end
