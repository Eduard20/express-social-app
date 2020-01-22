'use strict';

const path = require('path');
const fs = require('fs');

// @ts-ignore
module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const filePath = path.join(`${__dirname}/../../../../uploads`, id);
    if (!fs.existsSync(filePath)) {
      throw new Error('file not exist');
    }
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    const fileStream = fs.createReadStream(filePath);

    return fileStream.pipe(res);
  } catch (err) {
    next(err);
  }
};
