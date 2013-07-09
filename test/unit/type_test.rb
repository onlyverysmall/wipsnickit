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

require 'test_helper'

class TypeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
