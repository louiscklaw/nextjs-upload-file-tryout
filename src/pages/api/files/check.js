const fs = require('fs');
const path = require('path');
var mime = require('mime-types');
const AdmZip = require('adm-zip');

// const UPLOAD_STORE_PATH = 'D:\\_workspace\\nextjs-upload-file-tryout-ws\\nextjs-upload-file-tryout\\upload_store';
const { UPLOAD_STORE_PATH, ZIP_STORE_PATH } = require('./config');

const ERR_DIR_PREFIX_NOT_FOUND = 1;

async function check(req) {
  try {
    let { dir_prefix } = req.query;
    if (dir_prefix == 'undefined') throw Error('dir_prefix undefined');

    let file_path = path.join(UPLOAD_STORE_PATH, dir_prefix);
    await fs.accessSync(file_path, fs.constants.F_OK);

    return { status: 'OK' };
  } catch (error) {
    console.log(`${__filename} ${req.query}`);
    console.error(error);
    throw Error(ERR_DIR_PREFIX_NOT_FOUND);
  }
}

export default async function handler(req, res) {
  try {
    let result = await check(req);

    return res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(200).send({ status: 'error', message: 'dir_prefix not found' });
  }
}
