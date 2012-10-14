requirejs([
    'application'
    ],
    function (application) {
    	$(document).ready(function(){
	    	var app = new application.Application();
	    	app.start();
    	})
    }
);
