var express = require('express'),
    request = require('request'),
    router = express.Router();

router.get('/results', function(req, res) {
       if (!req.query.textInput) {
           res.status(500);
           console.log("There's an error!");
       }
      request.get({ url: "http://gateway-a.watsonplatform.net/calls/text/TextGetEmotion?apikey=397940cb2b4f38eae9ec9886d64ae850e520c4f7&outputMode=json&text=" + req.query.textInput }, function(error, response, body) {
              if (!error && response.statusCode == 200) {
                  res.json(JSON.parse(response.body));
                 }
             });
     });

module.exports = router;
