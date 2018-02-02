// http://localhost:4848/resources/js/qlik.js
require.config({
  baseUrl: 'http://localhost:4848/resources'
});

require(['js/qlik'], function(qlik){
  console.log(qlik);

  // Open app using the openApp() method
  var app = qlik.openApp('Helpdesk Management');
  console.log(app);
})
