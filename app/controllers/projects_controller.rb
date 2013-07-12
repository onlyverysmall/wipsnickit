class ProjectsController < ApplicationController
  respond_to :json

  def create
    @project = current_user.projects.build(params[:project])
    
    @project.save
    render :show
  end

  def destroy
    @project = Project.find(params[:id])

    respond_with @project.destroy
  end

  def index
    @projects = current_user.projects

    render :index
  end

  def show
    @project = Project.find(params[:id])
    render :show
  end

  def update
    @project = Project.find(params[:id])
    
    respond_with @project.update_attributes(params[:project])

    p @project.errors.full_messages
  end
end
