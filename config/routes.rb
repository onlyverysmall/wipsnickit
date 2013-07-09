Wipsnickit::Application.routes.draw do
  resource :session, only: [:create, :destroy, :new]
  resources :users, only: [:create, :index, :new, :show, :update]

  root to: "root#root"
end
