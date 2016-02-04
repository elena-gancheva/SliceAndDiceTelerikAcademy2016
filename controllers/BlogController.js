'use strict';
var BlogService = require('../services/BlogService');

exports.postArticle = function (req, res) {
	var user = req.user;
	var data = req.body;

	BlogService.createArticle({data, user}, function (data) {
		res.json(data);
	});
};

exports.getArticleById = function (req, res) {
	var data = req.body;

	BlogService.getArticleById(data, function (data) {
		res.json(data);
	});
};

exports.commentArticle = function (req, res) {
	var user = req.user;
	var data = req.body;
	var article;

	BlogService.getArticleById({articleId: data.articleId}, function (articleData) {
		if (articleData.success) {
			article = articleData.article;

			BlogService.addComment({data, user, article}, function (result) {
				res.json(result);
			});
		} else {
			res.status(400).json(articleData);
		}
	});
};
