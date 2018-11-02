class Tweet < ApplicationRecord
  belongs_to :user
  scope :by_user, -> (user) { where user_id: user.id }
  scope :public_only, ->  { where public: true }

  # def by_user
  #   self.all.where(public: true)
  # end
end
