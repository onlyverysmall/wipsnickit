class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.integer :type_id, null: false
      t.integer :user_id, null: false
      t.integer :status_id, null: false, default: 0
      t.date :completion_date
      t.text :notes

      t.timestamps
    end

    add_index :projects, :type_id
    add_index :projects, :user_id
    add_index :projects, :status_id
  end
end
