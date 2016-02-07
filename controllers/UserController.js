'use strict';
var mongoose = require('mongoose');
var User = require('../models/User');

exports.register = function (req, res) {
	User.register(new User({
		username: req.body.username,
		firstName: req.body.firstname,
		userImageUrl: req.body.userImageUrl
	}), req.body.password, function (err, user) {
		if (err) {
			console.log(err);
			return res.send(err);
		} else {
			res.send({
				success: true,
				user: user
			});
		}
	});
};

exports.login = function (req, res, next) {
	User.authenticate()(req.body.username, req.body.password, function (err, user, options) {
		if (err) return next(err);
		if (user === false) {
			res.status(400).send({
				message: options.message,
				success: false
			});
		} else {
			req.login(user, function (err) {
				res.send({
					success: true,
					user: user
				});
			});
		}
	});
};

