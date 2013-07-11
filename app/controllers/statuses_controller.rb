class StatusesController < ApplicationController
  respond_to :json

  def index
    @statuses = Status.all
    respond_with @statuses
  end
end
