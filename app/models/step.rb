# == Schema Information
#
# Table name: steps
#
#  id              :integer          not null, primary key
#  name            :string(255)      not null
#  project_id      :integer          not null
#  notes           :text
#  completed       :boolean          default(FALSE), not null
#  completion_date :date
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Step < ActiveRecord::Base
  attr_accessible :name, :project_id, :notes, :completion_date, :completed

  validates :name, :project, presence: true

  belongs_to :project
  has_one :user, through: :project

  default_scope order('id ASC')
end
