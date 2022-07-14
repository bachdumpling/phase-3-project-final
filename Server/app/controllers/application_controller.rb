class ApplicationController < Sinatra::Base
  
  set :default_content_type, 'application/json'
  
  # Add your routes here
  
  get "/events" do
    events=Event.all
    events.to_json
  end

  patch "messages"
  messages = Message.find(params[:id])
  messages.destroy
  messages.to_json
end
