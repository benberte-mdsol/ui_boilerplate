// usage: log('inside coolFunc',this,arguments);
// http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};

/********************** APPLICATION JAVSCRIPT BELOW THIS LINE **********************************/
/***********************************************************************************************/
(function($) 
	{
		$('#flexi').flexigrid({height:'auto',striped:true});  
	}

(jQuery));