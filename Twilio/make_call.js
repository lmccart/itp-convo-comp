// node-twilio docs: http://twilio.github.io/twilio-node/
// npm install twilio

// TwiML xml response format docs: https://www.twilio.com/docs/api/twiml 

var client = require('twilio')('ACCOUNT_SID', 'AUTH_TOKEN');

//Place a phone call, and respond with TwiML instructions from the given URL
client.makeCall({

  to: '+16173088***', // Any number Twilio can call
  from: '+16172846***', // A number you bought from Twilio and can use for outbound communication
  url: 'http://lauren-mccarthy.com/test/convocomp/response_call.xml' // A URL that produces an XML document (TwiML) which contains instructions for the call

}, function(err, responseData) {

  if (err) console.log(err);
  //executed when the call has been initiated.
  console.log(responseData.from);

});
