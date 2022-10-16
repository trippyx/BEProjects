const mongoose = require('mongoose');
const schema = new mongoose.Schema({ name: 'string', size: 'string' });
const testModel = mongoose.model('testModel', schema);
exports.testModel = testModel;