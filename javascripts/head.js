

/**

NOTE: 

Thinking of splitting ther html code in pieces for maintence purposes

*/



var head = {

	init: function() {

		this.style();
	},

	style: function() {

		/** Custom CSS */
		var stylesheet = "stylesheet/main.css",
		head = document.getElementsByTagName("head")[0],
		css = document.createElement("link");

		css.setAttribute("rel", "stylesheet");
		css.setAttribute("type", "text/css");
		css.setAttribute("href", stylesheet);

		head.appendChild(css);

	}

}

document.addEventListener("DOMContentLoaded", function(){

	head.init();

});

