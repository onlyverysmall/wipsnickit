class RemovePriorityNumberFromSteps < ActiveRecord::Migration
  def up
    remove_column :steps, :priority_number
  end

  def down
  end
end
