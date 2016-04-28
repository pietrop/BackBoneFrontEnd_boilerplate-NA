/**



NOT IN USE


This loads all the scripts



*/


document.addEventListener("DOMContentLoaded", function(){

	var body = document.getElementsByTagName("body")[0],
		jquerySrc = "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js",
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

});