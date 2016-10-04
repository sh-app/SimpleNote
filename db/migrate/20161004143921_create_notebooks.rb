class CreateNotebooks < ActiveRecord::Migration
  def change
    create_table :notebooks do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.string :description
      t.string :image_url

      t.timestamps null: false
    end

    add_index :notebooks, :author_id
  end
end
