var request = require('request');

module.exports = function(callback) {

  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(process.env.SPOTIFY_ID + ':' + process.env.SPOTIFY_SECRET).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };


  request.post(authOptions, function(error, response, body){
    console.log(error, response.statusCode, body);

    if (!error && response.statusCode === 200) {
      callback(body.access_token);
    }
  })

}
