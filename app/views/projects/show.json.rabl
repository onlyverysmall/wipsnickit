object @project
attributes :id, :title, :type_id, :user_id, :status_id, :completion_date, :notes 

node :type_name do |p|
  p.type.name
end

node :status_name do |p|
  p.status.name
end
