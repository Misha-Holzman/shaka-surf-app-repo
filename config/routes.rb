Rails.application.routes.draw do
  scope 'api' do
    get 'tweets/mine', to: 'tweets#mine'
    resources :tweets
  end

  scope 'auth' do
    post 'register', to: 'users#register'
    post 'login', to: 'users#login'
  end


  get 'test', to: 'users#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
