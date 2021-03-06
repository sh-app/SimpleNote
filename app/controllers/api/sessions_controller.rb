class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
    )

    if @user
      log_in(@user)
      render 'api/users/show'
    else
      render json: ['Invalid credentials'], status: 401
    end
  end

  def destroy
    if current_user
      log_out
      render json: [`Cya soon`]
    else
      render json: ['Already logged out...']
    end
  end

end
