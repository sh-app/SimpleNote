class Api::NotesController < ApplicationController

  def index
    render :index;
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
    @note = Note.find(params[:id])

    if @note.update(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  private
  def note_params
    params.require('note').permit(:title, :body, :notebook_id)
  end

end
