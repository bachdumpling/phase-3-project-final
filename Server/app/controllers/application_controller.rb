class ApplicationController < Sinatra::Base
  
  set :default_content_type, 'application/json'
  
  # Add your routes here
  
  get "/events" do
    events=Event.all
    events.to_json
  end

  delete "/events" do
  events = Event.find(params[:id])
  events.destroy
  events.to_json
  end 
  
  patch "/events/:id" do
  events = Event.find(params[:id])
  events.update(
    title: params[:title],
    start: params[:start],
    end: params[:end])
    events.to_json
  end 

  post "/events" do
    events = Event.create(
      title: params[:title],
      start: params[:start],
      end: params[:end])
    events.to_json
  end

end
