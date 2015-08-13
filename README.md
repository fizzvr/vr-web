[![Build Status](http://img.shields.io/travis/fizzvr/vr-web/master.svg?style=flat)](https://travis-ci.org/fizzvr/vr-web)

Desarrollando con DOCPAD
================
![Alt text](http://img8.uploadhouse.com/fileuploads/21439/21439888ad02f473d6b0307d3c9d0fd73670d8ee.jpg)
* **NODEJS**
  * [DocPad](http://docpad.org/) - Generador estático
  ``` bash
	sudo npm install -g docpad
	```
  * [Grunt](http://gruntjs.com/) - Corredor de tareas
   ``` bash
	sudo npm install -g grunt-cli
	```
  * [Bower](http://bower.io/) - Dependencias del cliente
   ``` bash
	sudo npm install -g bower
	```
1. Clonar el repositorio, instalar dependencias y correr el servidor

	``` bash
	git clone git@github.com:fizzvr/vr-web.git
	cd vr-web
	sudo npm install
    bower install --allow-root
	docpad run
	```

1. Abrir el navegador [http://localhost:9778/](http://localhost:9778/)

1. Comenzar editando el directorio `src`
