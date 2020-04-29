'use strict';

var server = require('server');
var URLUtils = require('dw/web/URLUtils');

server.get('Show', server.middleware.https, function (req, res, next) {
    var userForm = server.forms.getForm('userContact');
    var actionUrl = URLUtils.url('UserContact-Validate')
    userForm.clear();

    res.render('/helloWorld/helloWorld', {
        message: 'Hi ALL'
    });
    next();
});

// server.post('Validate', function(req, res, next) {
//     var userForm = server.forms.getForm('userContact');

//     if(userForm && userForm.valid) {
//         res.render('/userContact/userContact');
//     }

//     next();
// })

module.exports = server.exports();