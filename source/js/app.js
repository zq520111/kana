!function(){
  'use strict';
  
    var userAgent = navigator.userAgent; 
    var os = '';
    if ( userAgent.indexOf(" Windows") > -1 ) {
        os = 'windows';
    } else {
        os = 'other';
    }
    
   console.log(userAgent);
    document.querySelector('body').classList.add(os);
}();