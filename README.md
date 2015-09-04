![nodejs](http://img4.uploadhouse.com/fileuploads/21496/21496034b167d7b8bdd44c0e0ee4571a1581ae17.png)

Proyecto 1F4
================

![Alt text](http://img8.uploadhouse.com/fileuploads/21439/21439888ad02f473d6b0307d3c9d0fd73670d8ee.jpg)


NPM | Descripción | Instalación
--- | --- | ---
[**DocPad**](http://docpad.org/) | Generador estático | `sudo npm install -g docpad`
[**Grunt**](http://gruntjs.com/) | Corredor de tareas | `sudo npm install -g grunt-cli`
[**Bower**](http://bower.io/) | Dependencias del cliente |`sudo npm install -g bower`

1. Clonar este repositorio, instalar dependencias y correr el servidor
	``` bash
	git clone git@github.com:fizzvr/vr-web.git
	cd vr-web
	sudo npm install
    bower install --allow-root
	docpad run
	```
1. Abrir el navegador [http://localhost:9778/](http://localhost:9778/)
1. Comenzar editando el directorio `src`

[![Build Status](http://img.shields.io/travis/fizzvr/vr-web/master.svg?style=flat)](https://travis-ci.org/fizzvr/vr-web)

