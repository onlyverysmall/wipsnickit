class RootController < ApplicationController
  def root
    @user = User.new
  end
end
