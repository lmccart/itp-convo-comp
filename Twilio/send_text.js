// http://twilio.github.io/twilio-node/
// npm install twilio
var client = require('twilio')('ACCOUNT_SID', 'AUTH_TOKEN');

//Send an SMS text message
client.sendMessage({

  to:'+16173088***', // Any number Twilio can deliver to
  from: '+16172846***', // A number you bought from Twilio and can use for outbound communication
  body: 'hello!' // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio

  if (!err) { // "err" is an error received during the request, if any

    // "responseData" is a JavaScript object containing data received from Twilio.
    // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
    // http://www.twilio.com/docs/api/rest/sending-sms#example-1

    console.log(responseData.from); // outputs "+14506667788"
    console.log(responseData.body); // outputs "word to your mother."

  }
});