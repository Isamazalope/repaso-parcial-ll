const path = require('path');

const index = (req, res) => {
  const filePath = path.resolve(__dirname, '../../private/index.html');
  res.sendFile(filePath);
};

module.exports = {
  index
};