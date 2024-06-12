import formidable from 'formidable';
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
var randomize = require('randomatic');
import rimraf from 'fs-extra';
const path = require('path');

import { csrf } from '../../../lib/csrf';
import { discordSendErrorMessage, sendMessage } from '../../../lib/discord';

const { UPLOAD_STORE_PATH, ZIP_STORE_PATH } = require('./config');

async function upload(req) {
  let fields, files;
  const form = formidable({});

  try {
    [fields, files] = await form.parse(req);
    const remarks = fields.remarks; // Parsing the 'remarks' field

    let dir_prefix = randomize('A', 5);

    for (var i = 0; i < files.selectedFiles.length; i++) {
      // let dest_path = UPLOAD_STORE_PATH + '\\' + dir_prefix + '\\';
      let dest_path = path.join(UPLOAD_STORE_PATH, dir_prefix) + path.sep;
      try {
        rimraf.removeSync(dest_path);
      } catch (error) {
        console.error('error during removing directory, ignoring');
      }

      fs.mkdirSync(dest_path, { recursive: true });
      let bs = fs.readFileSync(files.selectedFiles[i].filepath);

      fs.writeFileSync(dest_path + files.selectedFiles[i].originalFilename, bs);
      fs.writeFileSync(`${dest_path}upload_meta.json`, JSON.stringify({ remarks }));
    }

    await sendMessage(`https://share.louislabs.com/en/get_files/${dir_prefix}`);

    return { status: 'ok', data: { fields, files, dir_prefix } };
  } catch (error) {
    console.error(error);

    await discordSendErrorMessage(`api/files/upload.js, share.louislabs.com, some error found !`);
  }
}

export async function handler(req, res) {
  let response = {};

  try {
    response = await upload(req);

    res.status(200).json(response);
  } catch (err) {
    res.status(400).send(err);
  }
}

export default csrf(handler);

export const config = {
  api: {
    bodyParser: false,
  },
};
