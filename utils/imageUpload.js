const multer = require('multer');
const path = require('path');
const fs = require('fs');
const imagePath = path.resolve(__dirname, '..', 'public', 'uploads');

if (!fs.existsSync(imagePath)) {
  fs.mkdirSync(imagePath),
    {
      recursive: true,
    };
}
const storageConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagePath);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} - ${file.originalname} `);
  },
});

const imageUpload = multer({ storage: storageConfig });

module.exports = imageUpload;
