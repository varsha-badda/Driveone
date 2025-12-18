const express = require('express');
const upload = require('../middleware/upload');
const File = require('../models/file.model');

const router = express.Router();

router.post('/upload', upload.single('file'), async (req, res) => {
  console.log('UPLOAD ROUTE HIT');        // 👈 MUST PRINT
  console.log('FILE:', req.file);         // 👈 MUST NOT BE undefined

  if (!req.file) {
    return res.send('NO FILE RECEIVED');
  }

  await File.create({
    fileName: req.file.originalname || 'Uploaded File',
    fileUrl: req.file.path,
    fileType: req.file.mimetype
  });

  res.redirect('/');
});


module.exports = router;
