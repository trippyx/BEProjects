const mongoose = require('mongoose');
const schema = new mongoose.Schema({ name: mongoose.SchemaTypes.String, price: mongoose.SchemaTypes.Number });
const booksModel = mongoose.model('books', schema);
exports.booksModel = booksModel;