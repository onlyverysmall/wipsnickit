class UsersController < ApplicationController
  before_filter :redirect_logged_in_user, only: [:new]

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])

    if @user.save
      redirect_to root_url
    else
      flash.now[:errors] ||= []
      flash.now[:errors] << @user.errors.full_messages
      render :new
    end
  end

  def index
    @users = User.all
    render json: @users
  end
  
  def show
    @user = User.find(params[:id])

    render json: @user
  end

  def update
    @user = User.find(params[:id])
    @user.assign_attributes(params[:user])

    if user_authorized(@user) && @user.save
      render json: @user
    else
      flash.now[:errors] ||= []
      flash.now[:errors] << @user.errors.full_messages
      render json: @user
    end
  end
end
