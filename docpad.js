var docpadConfig, moment, exec, json;
moment = require('moment');
moment.lang('es');
exec = require('child_process').exec;
json = require('./package.json');
docpadConfig = {
	templateData: {
		site: {
			url: "http://www.fizzvr.com",
			titulo: "FizzVR",
			descripcion: "Compilando el mundo con tecnologías de hoy y generando bits para la web de mañana",
			keywords: "vladimir, vladimir rodríguez, rodríguez, javascript, html5, jquery, css3, git, ajax, html, desarrolo web, diseño web, programación, v2b",
			autor: "fizzvr",
			email: "fizzvr@gmail.com",
			go_css: "/cvr/cssvr.css",
			go_js: "/jvr/vrweb.js"
		},
		obtenerDocpadv: function () {
			version = json.dependencies.docpad;
			return version;
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
		},
		obtenerEstilos: function() {
			return this.document.css || this.site.go_css;
		},
		obtenerJavascript: function() {
			return this.document.js || this.site.go_js;
		}
	},
	collections: {
	    paginas: function(database) {
	    return database.findAllLive({
	        pageOrder: {
	          $exists: true
	        }
	      }, [
	        {
	          pageOrder: 1,
	          titulo: 1
	        }
	      ]);
	    },
	    proyectos: function(database) {
	      return database.findAllLive({
	        relativeOutDirPath: 'proyectos',
	        hex: {
	          $exists: true
	        }
	      }, [
	        {
	          hex: 1
	        }
	      ]);
	    }
	},
	events: {
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
