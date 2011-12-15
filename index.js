require('coffee-script')
var app = require('./routes')
app.listen(3000);
console.log("Express server listening on port %d", app.address().port);
