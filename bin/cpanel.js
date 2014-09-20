#!/usr/bin/env node

var cpanel = require( '../' );

var cpanelClient = cpanel.createClient({});

console.log( 'node-cpanel' );

cpanelClient.call('listaccts', { 'api.version': 1, search: 'ud' }, function (err, res) {
  console.log( 'listaccts' );
  console.log( require( 'util').inspect( res, { colors: true , depth:5, showHidden: false } ) );
});

