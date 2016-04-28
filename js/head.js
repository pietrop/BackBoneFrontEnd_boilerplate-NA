

/**

NOTE: 

Thinking of splitting ther html code in pieces for maintence purposes

*/

document.addEventListener("DOMContentLoaded", function(){

	var stylesheet = "views/main.css",
		head = document.getElementsByTagName("head")[0],
		css = document.createElement("link");

		css.setAttribute("rel", "stylesheet");
		css.setAttribute("type", "text/css");
		css.setAttribute("href", stylesheet);

		head.appendChild(css);

});

