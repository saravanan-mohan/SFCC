'use strict';

var server = require('server');

/**
 * Any customization on this endpoint, also requires update for Default-Start endpoint
 */
server.get('Show', function (req, res, next) {
    res.render('/helloWorld/helloWorld', {
        message: 'Hello All...'
    });
    next();
});

module.exports = server.exports();
