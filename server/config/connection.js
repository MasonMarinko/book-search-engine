const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://crason8:masonhi@cluster0.pqqbc.mongodb.net/deepthoughts?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
}, function (error) {
  console.log(error)
});

module.exports = mongoose.connection;