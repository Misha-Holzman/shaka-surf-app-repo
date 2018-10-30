class CreateTweets < ActiveRecord::Migration[5.2]
  def change
    create_table :tweets do |t|
      t.string :content, limit: 140
      t.references :user, foreign_key: true
      t.boolean :public
      t.datetime :created_at

      t.timestamps
    end
    add_index :tweets, :content
    add_index :tweets, :created_at
  end
end
