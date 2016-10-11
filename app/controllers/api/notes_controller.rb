class Api::NotesController < ApplicationController
  before_action :require_login

  def index
    @notes = Note.where(["author_id = ?", current_user.id.to_s])
    render :index
  end

  def create
    @note = Note.new(note_params)
    @note.author = current_user

    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = Note.find(params[:note][:id])

    if (@note.author_id == current_user.id) && @note.update(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def show
    @note = Note.find(params[:id])
    render :show
  end

  def destroy
    @note = Note.find(params[:id])
    if (@note.author_id == current_user.id) && @note.destroy
      render 'api/notes/index'
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  private
  def note_params
    params.require('note').permit(:title, :body, :notebook_id)
  end

end
