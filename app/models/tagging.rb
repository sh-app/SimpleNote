class Tagging < ActiveRecord::Base

  validates :tag_id, :note_id, presence: true
  validates :tag_id, uniqueness: { scope: [:note_id] }

  belongs_to(
    :note,
    class_name: 'Note',
    primary_key: :id,
    foreign_key: :note_id
  )

  belongs_to(
    :tag,
    class_name: 'Tag',
    primary_key: :id,
    foreign_key: :tag_id
  )
end
