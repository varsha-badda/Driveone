const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  fileName: String,
  fileUrl: String,
  fileType: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

module.exports = mongoose.model('File', fileSchema);
