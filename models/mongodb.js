var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/node_blog');
exports.mongoose = mongoose;