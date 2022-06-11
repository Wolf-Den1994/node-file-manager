import { unlink } from 'fs/promises';
import { stdout } from 'node:process';
import { EOL } from 'os';
import { fail } from '../../utils/constants.js';
import { getPath } from '../path/path.js';

const deleteFile = async (path) => {
  try {
    await unlink(getPath(path));
    stdout.write(`File has been deleted${EOL}${EOL}`);
  } catch (error) {
    console.error(fail);
  }
};

export default deleteFile;
