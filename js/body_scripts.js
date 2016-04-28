/**

This loads all the initial scripts

*/

var body = document.getElementsByTagName("body")[0];


var page = {

	init: function(){

		this.libraries();
		this.customScripts();

	},

	libraries: function() {

		var jquerySrc = "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js",
			underscoreSrc = "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js",
			backboneSrc = "https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min.js",
			
			jquery = document.createElement("script"),
			underscore = document.createElement("script"),
			backbone = document.createElement("script");

			jquery.setAttribute("src", jquerySrc);
			underscore.setAttribute("src", underscoreSrc);
			backbone.setAttribute("src", backboneSrc);

			body.appendChild(jquery);
			body.appendChild(underscore);
			body.appendChild(backbone);

	},

	customScripts: function(){

		var bundleSrc = "bundle.js",
			bundle = document.createElement("script");
			
			bundle.setAttribute("src", bundleSrc);

			body.appendChild(bundle);
			
	}
}


document.addEventListener("DOMContentLoaded", function(){

	page.init();

});