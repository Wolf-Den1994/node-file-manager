import { stdout } from 'node:process';
import { unlink } from 'fs/promises';
import { EOL } from 'os';
import { getPath } from '../path/path.js';
import copyFile from './copyFile.js';
import { fail } from '../../utils/constants.js';

const moveFile = async (path, newPath) => {
  try {
    await copyFile(path, newPath);
    await unlink(getPath(path));
    stdout.write(`File has been moved${EOL}${EOL}`);
  } catch (error) {
    console.error(fail);
  }
};

export default moveFile;
