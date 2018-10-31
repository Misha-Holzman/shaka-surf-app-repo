Rails.application.routes.draw do
  scope '/api' do
    get 'tweets/mine', to: 'tweets#mine'
    resources :tweets
  end


  post 'auth/register', to: 'users#register'
  post 'auth/login', to: 'users#login'
  get 'test', to: 'users#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
