class ApplicationController < ActionController::Base
  include SessionsHelper
  include UsersHelper

  protect_from_forgery

  def redirect_logged_in_user
    if logged_in?
      flash[:errors] ||= []
      flash[:errors] << "You are already logged in"
      redirect_to root_url 
    end
  end
end
