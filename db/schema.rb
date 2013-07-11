# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130711163009) do

  create_table "projects", :force => true do |t|
    t.string   "title",                          :null => false
    t.integer  "type_id",                        :null => false
    t.integer  "user_id",                        :null => false
    t.integer  "status_id",       :default => 1, :null => false
    t.date     "completion_date"
    t.text     "notes"
    t.datetime "created_at",                     :null => false
    t.datetime "updated_at",                     :null => false
  end

  add_index "projects", ["status_id"], :name => "index_projects_on_status_id"
  add_index "projects", ["type_id"], :name => "index_projects_on_type_id"
  add_index "projects", ["user_id"], :name => "index_projects_on_user_id"

  create_table "statuses", :force => true do |t|
    t.string   "name",       :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "steps", :force => true do |t|
    t.string   "name",                               :null => false
    t.integer  "project_id",                         :null => false
    t.integer  "priority_number",                    :null => false
    t.text     "notes"
    t.boolean  "completed",       :default => false, :null => false
    t.date     "completion_date"
    t.datetime "created_at",                         :null => false
    t.datetime "updated_at",                         :null => false
  end

  add_index "steps", ["completion_date"], :name => "index_steps_on_completion_date"
  add_index "steps", ["project_id"], :name => "index_steps_on_project_id"

  create_table "types", :force => true do |t|
    t.string   "name",       :null => false
    t.integer  "user_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "types", ["user_id"], :name => "index_types_on_user_id"

  create_table "users", :force => true do |t|
    t.string   "username",        :null => false
    t.string   "email",           :null => false
    t.string   "password_digest", :null => false
    t.string   "token"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  add_index "users", ["email"], :name => "index_users_on_email"
  add_index "users", ["username"], :name => "index_users_on_username"

end
