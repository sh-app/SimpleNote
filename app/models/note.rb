class Note < ActiveRecord::Base

  validates :title, :author, :notebook, presence: true

  belongs_to(
    :author,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id
  )

  belongs_to(
    :notebook,
    class_name: 'Notebook',
    primary_key: :id,
    foreign_key: :notebook_id
  )

  has_many(
   :taggings,
   class_name: 'Tagging',
   primary_key: :id,
   foreign_key: :note_id,
   dependent: :destroy
   )

   has_many(
    :tags,
    through: :taggings
    )
end
