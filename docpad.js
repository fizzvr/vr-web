var docpadConfig, moment, exec, json;
moment = require('moment');
moment.locale('es');
exec = require('child_process').exec;
json = require('./package.json');
docpadConfig = {
//  en la salida ya no es necesario incluir los archivos sin minificar, grunt realiza esta tarea.
    outPath: '../fizzvr.github.io',
    //ignorePaths: [
    //     "/mnt/12F7437F2537BBBC/proyectosgithub/vr-web/src/public/css/",
    //     "/mnt/12F7437F2537BBBC/proyectosgithub/vr-web/src/public/js/"
    // ],
	templateData: {
		site: {
			url: "http://fizzvr.github.io",
			titulo: "FizzVR",
			descripcion: "Desarrollador Quito Ecuador",
			keywords: "fizzvr, vladimir, vladimir rodríguez, rodríguez, quito, ecuador, desarrollador web, desarrollo web, backend, programador",
			autor: "fizzvr",
			email: "fizzvr@gmail.com",
            cvr1: ["act/bs3/css/bootstrap.min.css",
                   "act/fa/css/font-awesome.min.css",
                   "act/fs/flexslider.css",
                   "act/pp/css/prettyPhoto.css",
                   "cvr/vr1.min.css"],
            jvr1: ["act/jquery/jquery.min.js",
                   "act/bs3/bootstrap.min.js",
                   "act/ll/jquery.lazyload.js",
                   "act/ll/jquery.scrollstop.js",
                   "act/fs/jquery.flexslider.js",
                   "act/pp/jquery.prettyPhoto.js",
                   "act/ea/jquery.easing.min.js",
                   "act/ma/maplace-0.1.3.min.js",
                   "jvr/vr1.min.js"],
            apiv3: ["AIzaSyAHoa3zy3vwa8rYshYCdz-sMqjI9_1Jp60"],
            anal: ["49288081-2"]
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
				return "" + this.site.titulo + " - " + this.document.titulo;
			} else {
				return "" + this.site.titulo + " - Programador";
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
	       return database.findAllLive( {pageOrder: {$exists: true} }, [
	        {
	          pageOrder: 1,
	          titulo: 1
	        }
	      ]);
	    },

	    proyectos_finalizados: function(database) {
	      return database.findAllLive({
	        relativeOutDirPath: 'proyectos',
	        estado: {
	          $exists: false
	        }
	      }, [
	        {
	              title: -1,
	        }
	      ]);
	    },
	    proyectos_desarrollando: function(database) {
	      return database.findAllLive({
	        relativeOutDirPath: 'proyectos',
	           estado: {
	               $exists: true
	        }
	      }, [
	        {
                title: 1,
	            date: -1
	        }
	      ]);
	    },
        proyectos_favoritos: function(database) {
            return database.findAllLive({
              relativeOutDirPath: 'proyectos',
                favorito: {
                    $exists: true
                }
            }, [
              {
                title: 1
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
	},
	plugins: {
		ghpages: {
			deployRemote: 'salida',
        	deployBranch: 'master'
		}
	}
};
module.exports = docpadConfig;
