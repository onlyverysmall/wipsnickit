class ChangeDefaultValueOfStatus < ActiveRecord::Migration
  def up
    change_column :projects, :status_id, :integer, default: 1
  end
end
