class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.string :name, null: false
      t.integer :project_id, null: false
      t.integer :priority_number, null: false
      t.text :notes
      t.boolean :completed, null: false, default: false
      t.date :completion_date 

      t.timestamps
    end

    add_index :steps, :project_id
    add_index :steps, :completion_date
  end
end
