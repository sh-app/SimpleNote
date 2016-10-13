Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
      resources :users, only: [:create]
      resource :session, only: [:create, :destroy]
      resources :notes, only: [:show, :index, :create, :update, :destroy]
      resources :notebooks, only: [:show, :index, :create, :update, :destroy]
      resources :tags, only: [:index, :create]
  end

end
