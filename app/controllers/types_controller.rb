class TypesController < ApplicationController
  respond_to :json

  def create
    @type = current_user.types.build(params[:type])
    respond_with @type
  end

  def index
    @types = current_user.user_types
    respond_with @types
  end
end
