'use strict';
var soajs = require('soajs');
var config = require('./config.js');
var service = new soajs.server.service(config);

service.init(function() {
	service.get("/hello", function(req, res) {
		var name = req.soajs.inputmaskData.firstName + " " + req.soajs.inputmaskData.lastName;
		res.json(req.soajs.buildResponse(null, "Hello(v2) " + name));
	});
	service.start();
});
