Wipsnickit::Application.routes.draw do
  resource :session, only: [:create, :destroy, :new]
  resources :users, only: [:create, :index, :new, :show, :update]
  
  scope "api", defaults: { format: :json } do 
    resources :projects, only: [:create, :destroy, :index, :show, :update]
    resources :types, only: :create
  end

  root to: "root#root"
end
