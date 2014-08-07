var nunjucks = require('nunjucks');

module.exports = function(app) {

	app.get('/play', function (req, res) {

		return nunjucks.render('play.html', function (err, res) { });
	});

}
