class Tag < ActiveRecord::Base

  validates :name, presence: true

  has_many(
    :taggings,
    class_name: 'Tagging',
    primary_key: :id,
    foreign_key: :tag_id,
    dependent: :destroy
  )

  belongs_to(
    :author,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id
  )
  
  has_many(
    :notes,
    through: :taggings
  )


end
