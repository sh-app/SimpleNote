class Api::TagsController < ApplicationController

def index
  @tags = Tag.where(["author_id = ?", current_user.id.to_s])
  render :index
end

def create
  @tag = Tag.find_by_name_and_author_id(tag_params[:name], current_user.id) || Tag.new(name: tag_params[:name])
  @tag.author ||= current_user

  if @tag.save
    Tagging.create(tag_id: @tag.id, note_id: tag_params[:note_id])
    render :show
  else
    render json: @tag.errors.full_messages, status: 422
  end
end

def destroy
  @note = Note.find(tag_params[:note_id])
  @note.tags.delete(Tag.find(params[:id]))
end

private

def tag_params
  params.require('tag').permit(:name, :note_id)
end

end
