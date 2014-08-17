var nunjucks = require('nunjucks');

module.exports = function(app) {

	app.get('/', function (req, res) {

		return res.render('play.html', {});
	});

};
