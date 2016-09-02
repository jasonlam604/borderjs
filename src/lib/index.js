/*
Border.js - client side border revealer
(c) 2016 Jason Lam - http://www.jasonlam604.com
*/

//Libraries and functions
var onDomReady = require('./vendor/ondomready');
var dom = require('./vendor/dom');
var queryString = require('./vendor/querystring');

var Border = {
   
    /**
     * Runs Border
     */
    run: function(userOptions) {
    	var elDiv = document.getElementsByTagName('div');
    	
    	for(var i = 0;i < elDiv.length; i++)
    	{
    		elDiv[i].style.border='thin solid #000000';
    	}
    	
        return this;
    }
};

// Main Execution
if (onDomReady) {
	onDomReady( function() {
		Border.run();
	} );
}


module.exports = Border;