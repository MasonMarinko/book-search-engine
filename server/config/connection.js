const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://crason8:masonhi@cluster0.6ughz.mongodb.net/booksearch?retryWrites=true&w=majority',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

module.exports = mongoose.connection;