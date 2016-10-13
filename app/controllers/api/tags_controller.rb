class Api::TagsController < ApplicationController

def index
  @tags = Tag.where(["author_id = ?", current_user.id.to_s])
  render :index
end

def create
  @tag = Tag.new(tag_params)
  @tag.author = current_user
  if @tag.save
    render :show
  else
    render json: @tag.errors.full_messages, status: 422
  end
end

private
def tag_params
  params.require('tag').permit(:name)
end

end
