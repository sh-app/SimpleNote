class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  helper_method :current_user, :logged_in?

  private

  def current_user
    return nil unless session[:token]
    @current_user ||= User.find_by_session_token(session[:token])
  end

  def log_in(user)
    session[:token] = user.reset_token!
    @current_user = user
  end

  def log_out
    current_user.reset_token!
    session[:token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end

  def require_login
    unless current_user
      render json: ['Requires login'], status: 401
    end
  end

end
