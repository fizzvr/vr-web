var docpadConfig, moment, exec;
moment = require('moment');
moment.lang('es');
exec = require('child_process').exec;
docpadConfig = {
	templateData: {
		site: {
			url: "http://fizzvr.com",
			titulo: "Fizzvr",
			descripcion: "Aficionado de HTML5, Javascript, Dota y hXc",
			keywords: "vladimir, vladimir rodríguez, rodríguez, javascript, html5, jquery, css3, git, ajax, html, desarrolo web, diseño web, programación, tests, cursos, recursos, dota, dota 2, steam, valve, música, metal, core, metalcore, hardcore, web 2.0",
			autor: "fizzvr",
			email: "info@fizzvr.com"
		},
		formatoFecha: function (fecha, formato) {
			if (formato == null) {
				formato = 'LLLL';
			}
			return moment(fecha).format(formato);
		},
		obtenerTitulo: function() {
			if (this.document.titulo) {
				return "" + this.document.titulo + " | " + this.site.titulo;
			} else {
				return this.site.titulo;
			}
		}
	},
	events: {
		serverAfter: function(_arg) {
		var server;
		server = _arg.server;
			return server.get(/^\/\d+\/(c|j)\//, function(req, res, next) {
			req.url = req.url.replace(/^\/\d+\//, '/');
			return next();
			});
		},
		generateBefore: function (opts, next) {
		var proc;
		if (this.docpad.getConfig().frontendDebug) {
			return next();
		}
		proc = exec('grunt', {
		cwd: process.cwd()
		}, function(error, stdout, stderr) {
			console.log(stdout);
			if (error) {
				return process.exit();
			}
		});
			return proc.on('exit', next);
		}
	}
};
module.exports = docpadConfig;