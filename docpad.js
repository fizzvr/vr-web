var docpadConfig, moment, exec;
moment = require('moment');
moment.lang('es');
exec = require('child_process').exec;
docpadConfig = {
	templateData: {
		site: {
			url: "http://www.fizzvr.com",
			titulo: "FizzVR",
			descripcion: "Compilando el mundo con tecnologías de hoy y generando bits para la web de mañana",
			keywords: "vladimir, vladimir rodríguez, rodríguez, javascript, html5, jquery, css3, git, ajax, html, desarrolo web, diseño web, programación, v2b",
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
				return "" + this.site.titulo + " , " + this.document.titulo;
			} else {
				return "" + this.site.titulo + " , Programador";
			}
		},
		obtenerDescripcion: function() {
			return this.document.descripcion || this.site.descripcion;

		},
		obtenerPalabrasClave: function() {
			return this.site.keywords.concat(this.document.keywords || []).join(", ");
		},
		obtenerAutor: function() {
			return this.document.autor || this.site.autor;
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
		generateBefore: function(opts, next) {
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
