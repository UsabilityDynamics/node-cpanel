var express = require( 'express' );
var app = express();

var cpanelClient = cpanel.createClient({});

app.use( '/accounts', function( req, res ) {

  cpanelClient.call('listaccts', { 'api.version': 1, search: 'ud' }, function (error, data) {
    console.log( 'listaccts' );

    if( error ) {
      return res.send({
        ok: false,
        error: error
      });
    }

    return res.send({
      ok: true,
      data: data
    })

  });

});

app.listen( null, null, function() {
  console.log( this.address() );
});