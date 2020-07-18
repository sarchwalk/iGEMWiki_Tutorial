/* navbar style */
var navbarLinkElement = document.createElement('link');
navbarLinkElement.setAttribute('rel', 'stylesheet');
navbarLinkElement.setAttribute('href', 'css/navbar.css');

/* main style */
var mainStyleLinkElement = document.createElement('link');
mainStyleLinkElement.setAttribute('rel', 'stylesheet');
mainStyleLinkElement.setAttribute('href', 'css/main.css');

/* index style */
var indexStyleLinkElement = document.createElement('link');
indexStyleLinkElement.setAttribute('rel', 'stylesheet');
indexStyleLinkElement.setAttribute('href', 'css/index.css');
//
// /* jquery */
// var jqueryLinkElement = document.createElement('script');
// jqueryLinkElement.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js');


 // -------- BOOTSTRAP --------
/* index style */
var bootstrapStyleLinkElement = document.createElement('link');
bootstrapStyleLinkElement.setAttribute('rel', 'stylesheet');
bootstrapStyleLinkElement.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');


/* boostrap jquery */
var boostrapJqueryLinkElement = document.createElement('script');
boostrapJqueryLinkElement.setAttribute('src', 'https://code.jquery.com/jquery-3.3.1.slim.min.js');

/* bootstrap popper */
var bootstrapPopperLinkElement = document.createElement('script');
bootstrapPopperLinkElement.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js');

/* bootstrap min */
var boostrapMinLinkElement = document.createElement('script');
boostrapMinLinkElement.setAttribute('src', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js');


/* attach to the document*/


// Bootstrap
document.getElementsByTagName('head')[0].appendChild(bootstrapStyleLinkElement);
document.getElementsByTagName('head')[0].appendChild(boostrapJqueryLinkElement);
document.getElementsByTagName('head')[0].appendChild(bootstrapPopperLinkElement);
document.getElementsByTagName('head')[0].appendChild(boostrapMinLinkElement);

// General Styling
document.getElementsByTagName('head')[0].appendChild(navbarLinkElement);
document.getElementsByTagName('head')[0].appendChild(mainStyleLinkElement);
document.getElementsByTagName('head')[0].appendChild(indexStyleLinkElement);




