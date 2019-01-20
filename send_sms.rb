# require 'twilio-ruby'
require 'rubygems'
require 'twilio-ruby'

account_sid = 'AC6407bfe9cba4a8626018c1ad82950be6'
auth_token = 'a4a7ba2d637e1224048627c88805bb92'
client = Twilio::REST::Client.new(account_sid, auth_token)

from = '+19292039667' # Your Twilio number
to = '+13476036396' # Your mobile phone number

client.messages.create(
from: from,
to: to,
body: "Surfs up brah"
)
