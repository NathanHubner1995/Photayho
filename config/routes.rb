Rails.application.routes.draw do
  get 'items/index'

  get 'items/new'

  get 'items/create'

  get 'items/edit'

  get 'items/update'

  get 'items/destroy'

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
