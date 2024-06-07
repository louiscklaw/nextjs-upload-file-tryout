const fs = require('fs');
const path = require('path');
var mime = require('mime-types');
const AdmZip = require('adm-zip');

// const UPLOAD_STORE_PATH = 'D:\\_workspace\\nextjs-upload-file-tryout-ws\\nextjs-upload-file-tryout\\upload_store';
// const ZIP_STORE_PATH = 'D:\\_workspace\\nextjs-upload-file-tryout-ws\\nextjs-upload-file-tryout\\zip_work_dir';

const { UPLOAD_STORE_PATH, ZIP_STORE_PATH } = require('./config');

const ERR_DIR_PREFIX_NOT_FOUND = 1;

async function createZipArchive(file_path, output_zip_file) {
  return new Promise((resolve, reject) => {
    try {
      var zip = new AdmZip();

      console.log(file_path);

      // Add some files to the zip archive
      zip.addLocalFolder(file_path);

      // update file headers
      zip.getEntries().forEach(entry => {
        entry.header.flags |= 0x0800; // Set bit 11 - APP Note 4.4.4 Language encoding flag (EFS)
      });

      // Save the zip archive to disk
      const outputFile = path.join(output_zip_file);

      zip.writeZip(outputFile);

      console.log(`Successfully created ${outputFile}`);

      resolve(outputFile);
    } catch (error) {
      reject(error);
    }
  });
}

async function get(req) {
  try {
    let { dir_prefix } = req.query;
    // let file_path = UPLOAD_STORE_PATH + '\\' + dir_prefix + '\\';
    let file_path = path.join(UPLOAD_STORE_PATH, dir_prefix) + path.sep;

    // let zip_file_path = ZIP_STORE_PATH + '\\' + dir_prefix + '.zip';
    let zip_file_path = path.join(ZIP_STORE_PATH, `${dir_prefix}.zip`);

    await fs.accessSync(file_path, fs.constants.F_OK);

    await createZipArchive(file_path, zip_file_path);

    let file_content = await fs.readFileSync(zip_file_path);

    let filename = path.basename(zip_file_path);
    let file_mime = mime.lookup(zip_file_path);

    return [file_mime, file_content, filename];
  } catch (error) {
    console.log(`${__filename} ${req.query.file_id}`);
    console.error(error);
    throw Error(ERR_DIR_PREFIX_NOT_FOUND);
  }
}

export default async function handler(req, res) {
  try {
    let [mime, buffer, filename] = await get(req);

    res.setHeader('Content-Type', mime);
    res.setHeader('Content-Disposition', `attachment; filename=attachment.zip`);

    return res.status(200).send(buffer);
  } catch (err) {
    console.log(err);
    res.status(200).send({ status: 'error', message: 'dir_prefix not found' });
  }
}
