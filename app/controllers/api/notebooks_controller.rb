class Api::NotebooksController < ApplicationController
  before_action :require_login

  def index
    @notebooks = Notebook.where(["author_id = ?", current_user.id.to_s])
    render :index
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.author = current_user

    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def update
    @notebook = Notebook.find(params[:notebook][:id])

    if (@notebook.author_id == current_user.id) && @notebook.update(notebook_params)
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def show
    @notebook.Notebook.find(params[:id])
    render :show
  end

  def destroy
    @notebook = Note.find(params[:id])
    if (@notebook.author_id == current_user.id) && @notebook.destroy
      render 'api/notebooks/index'
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  private
  def notebook_params
    params.require('notebook').permit(:title, :description)
  end

end
