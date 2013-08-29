var docpadConfig, moment, exec;
moment = require('moment');
moment.lang('es');
exec = require('child_process').exec;
docpadConfig = {
	templateData: {
		site: {
			url: "http://www.fizzvr.com",
			titulo: "fizzvr",
			descripcion: "Aficionado de HTML5, Javascript, Dota y hXc",
			keywords: "vladimir, vladimir rodríguez, rodríguez, javascript, html5, jquery, css3, git, ajax, html, desarrolo web, diseño web, programación, tests, testeando, curso, recurso, dota, dota2, steam, valve, música, metal, core, metalcore, hardcore, web 2.0",
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
	}
};
module.exports = docpadConfig;