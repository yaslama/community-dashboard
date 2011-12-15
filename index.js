require('coffee-script')
var app = require('./routes')
app.listen(process.env.PORT || 3000)
console.log("Express server listening on port %d", app.address().port)
