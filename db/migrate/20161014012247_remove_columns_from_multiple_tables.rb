class RemoveColumnsFromMultipleTables < ActiveRecord::Migration
  def change
    remove_column :notebooks, :image_url
    remove_column :users, :location
    remove_column :users, :image_url
  end
end
