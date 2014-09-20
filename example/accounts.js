
var cpanel = require( '../' );

var cpanelClient = cpanel.createClient({});

cpanelClient.call('listaccts', { 'api.version': 1, search: 'ud' }, function (err, res) {
  console.log( require( 'util').inspect( res, { colors: true , depth:5, showHidden: false } ) );
});
