var docpadConfig, moment, exec;
moment = require('moment');
moment.lang('es');
exec = require('child_process').exec;
docpadConfig = {
	templateData: {
		site: {
			url: "http://fizvr.com",
			titulo: "Fizzvr | Testeando códigos, formas y signos Testimoniales",
			descripcion: "Fizzvr difundiendo lo adquirido tecnologías,juegos,musica,noticias",
			keywords: "testear,testeando,programar,programación,cursos,recursos,steam,hardcore",
			autor: "fizzvr"
		},
		formatoFecha: function (fecha, formato) {
			if (formato == null) {
				formato = 'LLLL';
			}
			return moment(fecha).format(formato);
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