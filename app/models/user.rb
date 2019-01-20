class User < ApplicationRecord
  belongs_to :experience
  has_secure_password
end

