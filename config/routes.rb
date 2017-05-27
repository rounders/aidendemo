Rails.application.routes.draw do
  root to: 'things#index'
  resources :things, only: [:index, :new, :create]
end
