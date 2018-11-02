class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :tel
      t.string :password_digest
      t.boolean :contact
      t.integer :location
      t.belongs_to :experience, foreign_key: true

      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
    add_index :users, :tel, unique: true
    add_index :users, :location
  end
end
