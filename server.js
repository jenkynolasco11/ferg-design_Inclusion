var connect = require('connect');
var serveStatic = require('serve-static');

var PORT = process.env.PORT || 8080;

connect().use(serveStatic(__dirname)).listen(PORT, function(){
    console.log(`Server running on ${PORT}...`);
});
