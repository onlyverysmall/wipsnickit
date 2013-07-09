class SessionsController < ApplicationController
  before_filter :redirect_logged_in_user, :only => [:new]

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_username(params[:user][:username])  

    if @user && @user.verify_password(params[:user][:password])  
      login_user(@user)
      redirect_to root_url
    else
      flash[:errors] ||= []
      flash[:errors] << "Incorrect username or password"
      render :new
    end
  end

  def destroy
    logout_user
    flash[:errors] ||= []
    flash[:errors] << "You have logged out"
    redirect_to root_url
  end
end
