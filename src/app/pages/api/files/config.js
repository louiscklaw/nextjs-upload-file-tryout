const path = require('path');
const fs = require('fs');

// D:\\_workspace\\nextjs-upload-file-tryout-ws\\nextjs-upload-file-tryout\\src\\.next\\server\\pages\\api\\files\\upload.js
const currentFilePath = __filename;
const currentPath = path.dirname(currentFilePath);
const src_directory = path.resolve(currentPath + '/../../../../..');
const proj_root = path.resolve(src_directory + '/..');

const UPLOAD_STORE_PATH = path.join(proj_root, 'upload_store');
const ZIP_STORE_PATH = path.join(proj_root, 'zip_work_dir');

export { UPLOAD_STORE_PATH, ZIP_STORE_PATH };
