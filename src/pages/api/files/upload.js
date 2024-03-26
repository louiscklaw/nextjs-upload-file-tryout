import formidable from 'formidable';
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
var randomize = require('randomatic');
import rimraf from 'fs-extra';
const path = require('path');
import detector from 'i18next-browser-languagedetector';

import { csrf } from '../../../lib/csrf';
import { discordSendErrorMessage, sendMessage } from 'lib/discord';

const { UPLOAD_STORE_PATH, ZIP_STORE_PATH } = require('./config');

async function upload(req) {
  let result = { data: {} };
  try {
    const form = formidable({});
    let fields;
    let files;
    [fields, files] = await form.parse(req);
    let dir_prefix = randomize('A', 5);

    // let response = await storage.createFile('helloworld', file_id, InputFile.fromPath(files['p_img'][0].filepath, file_id));
    for (var i = 0; i < files.avatar.length; i++) {
      // let dest_path = UPLOAD_STORE_PATH + '\\' + dir_prefix + '\\';
      let dest_path = path.join(UPLOAD_STORE_PATH, dir_prefix) + path.sep;

      try {
        rimraf.removeSync(dest_path);
      } catch (error) {
        console.error('error during removing directory, ignoring');
      }

      fs.mkdirSync(dest_path, { recursive: true });
      let bs = fs.readFileSync(files.avatar[i].filepath);
      fs.writeFileSync(dest_path + files.avatar[i].originalFilename, bs);
    }

    await sendMessage(`https://share.louislabs.com/get_files?dir_prefix=${dir_prefix}`);

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
