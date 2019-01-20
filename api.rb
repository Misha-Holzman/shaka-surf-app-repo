# require 'HTTParty'
# require 'pp'

# response = HTTParty.get('https://api.worldweatheronline.com/premium/v1/marine.ashx')

# pp response.code, response.message, response.headers.inspect

# pp response["data"]

require 'HTTParty'
require 'pp'

class SurfConditions
  include HTTParty
  attr_accessor :facts

  base_uri 'https://api.worldweatheronline.com/premium/v1/marine.ashx'
  default_params output: :json

  def initialize(facts)
    @facts = facts
  end

  def random_fact
    @facts.sample["fact"]
  end

  # Class Methods
  def self.fetch(limit)
    response = get('/facts', query: { limit: limit })

    if response.success?
      puts "success"
      self.new(response["data"])
    else
      puts "failure"
      raise response.response
    end
  end
end
