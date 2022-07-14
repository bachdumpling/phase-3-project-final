class CreateEvents < ActiveRecord::Migration[6.1]
  def change 
    create_table :events do |t|
  t.string :title
  t.timestamp :start
  t.timestamp :end 
    end 
  end
end
