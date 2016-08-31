/*!

BorderJS - client side border revealer
Version 1.0.0+cjgn5
© 2016 Jason Lam - http://www.jasonlam604.com

Site:     http://borderjs.com
Issues:   https://github.com/jasonlam604/borderjs/issues
License:  MIT

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Border"] = factory();
	else
		root["Border"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Border.js - client side border revealer
	(c) 2016 Jason Lam - http://www.jasonlam604.com
	*/

	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Border.js - client side border revealer
	(c) 2016 Jason Lam - http://www.jasonlam604.com
	*/

	//Libraries and functions
	var onDomReady = __webpack_require__(2);

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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! 
	 * onDomReady.js 1.4.0 (c) 2013 Tubal Martin - MIT license
	 */
	;(function (definition) {
	    if (true) {
	        // Register as an AMD module.
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        // Browser globals
	        window['onDomReady'] = definition();
	    }
	}(function() {
	    
	    'use strict';

	    var win = window,
	        doc = win.document,
	        docElem = doc.documentElement,

	        LOAD = "load",
	        FALSE = false,
	        ONLOAD = "on"+LOAD,
	        COMPLETE = "complete",
	        READYSTATE = "readyState",
	        ATTACHEVENT = "attachEvent",
	        DETACHEVENT = "detachEvent",
	        ADDEVENTLISTENER = "addEventListener",
	        DOMCONTENTLOADED = "DOMContentLoaded",
	        ONREADYSTATECHANGE = "onreadystatechange",
	        REMOVEEVENTLISTENER = "removeEventListener",

	        // W3C Event model
	        w3c = ADDEVENTLISTENER in doc,
	        top = FALSE,

	        // isReady: Is the DOM ready to be used? Set to true once it occurs.
	        isReady = FALSE,

	        // Callbacks pending execution until DOM is ready
	        callbacks = [];
	    
	    // Handle when the DOM is ready
	    function ready( fn ) {
	        if ( !isReady ) {
	            
	            // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
	            if ( !doc.body ) {
	                return defer( ready );
	            }
	            
	            // Remember that the DOM is ready
	            isReady = true;

	            // Execute all callbacks
	            while ( fn = callbacks.shift() ) {
	                defer( fn );
	            }
	        }    
	    }

	    // The ready event handler
	    function completed( event ) {
	        // readyState === "complete" is good enough for us to call the dom ready in oldIE
	        if ( w3c || event.type === LOAD || doc[READYSTATE] === COMPLETE ) {
	            detach();
	            ready();
	        }
	    }

	    // Clean-up method for dom ready events
	    function detach() {
	        if ( w3c ) {
	            doc[REMOVEEVENTLISTENER]( DOMCONTENTLOADED, completed, FALSE );
	            win[REMOVEEVENTLISTENER]( LOAD, completed, FALSE );
	        } else {
	            doc[DETACHEVENT]( ONREADYSTATECHANGE, completed );
	            win[DETACHEVENT]( ONLOAD, completed );
	        }
	    }
	    
	    // Defers a function, scheduling it to run after the current call stack has cleared.
	    function defer( fn, wait ) {
	        // Allow 0 to be passed
	        setTimeout( fn, +wait >= 0 ? wait : 1 );
	    }
	    
	    // Attach the listeners:

	    // Catch cases where onDomReady is called after the browser event has already occurred.
	    // we once tried to use readyState "interactive" here, but it caused issues like the one
	    // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
	    if ( doc[READYSTATE] === COMPLETE ) {
	        // Handle it asynchronously to allow scripts the opportunity to delay ready
	        defer( ready );

	    // Standards-based browsers support DOMContentLoaded    
	    } else if ( w3c ) {
	        // Use the handy event callback
	        doc[ADDEVENTLISTENER]( DOMCONTENTLOADED, completed, FALSE );

	        // A fallback to window.onload, that will always work
	        win[ADDEVENTLISTENER]( LOAD, completed, FALSE );

	    // If IE event model is used
	    } else {            
	        // Ensure firing before onload, maybe late but safe also for iframes
	        doc[ATTACHEVENT]( ONREADYSTATECHANGE, completed );

	        // A fallback to window.onload, that will always work
	        win[ATTACHEVENT]( ONLOAD, completed );

	        // If IE and not a frame
	        // continually check to see if the document is ready
	        try {
	            top = win.frameElement == null && docElem;
	        } catch(e) {}

	        if ( top && top.doScroll ) {
	            (function doScrollCheck() {
	                if ( !isReady ) {
	                    try {
	                        // Use the trick by Diego Perini
	                        // http://javascript.nwbox.com/IEContentLoaded/
	                        top.doScroll("left");
	                    } catch(e) {
	                        return defer( doScrollCheck, 50 );
	                    }

	                    // detach all dom ready events
	                    detach();

	                    // and execute any waiting functions
	                    ready();
	                }
	            })();
	        } 
	    } 
	    
	    function onDomReady( fn ) { 
	        // If DOM is ready, execute the function (async), otherwise wait
	        isReady ? defer( fn ) : callbacks.push( fn );
	    }
	    
	    // Add version
	    onDomReady.version = "1.4.0";
	    // Add method to check if DOM is ready
	    onDomReady.isReady = function(){
	        return isReady;
	    };
	    
	    return onDomReady;
	}));

/***/ }
/******/ ])
});
;
(function(ctx, isMeteorPackage) {
    if (isMeteorPackage) {
        Border = ctx.Border;
    }
})(this, typeof Meteor !== 'undefined' && typeof Package !== 'undefined');