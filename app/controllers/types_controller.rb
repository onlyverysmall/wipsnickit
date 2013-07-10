class TypesController < ApplicationController
  respond_to :json

  def create
    @type = current_user.types.build(params[:type])

    respond_with @type
  end
end
