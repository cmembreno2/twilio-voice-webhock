const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const router = express.Router();

router.post('/voice', async (request,response)=> {

    // Use the Twilio Node.js SDK to build an XML response
  const twiml = new VoiceResponse();
  twiml.say({ voice: 'alice' }, 'hello world!');

  // Render the response as XML in reply to the webhook request
  response.type('text/xml');
  response.send(twiml.toString());

});

module.exports = router;