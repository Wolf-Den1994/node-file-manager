import { rename } from 'fs/promises';
import { stdout } from 'node:process';
import { EOL } from 'os';
import { join } from 'path';
import { fail } from '../../utils/constants.js';
import { getPath, getParentPath } from '../path/path.js';

const splitingLeft = (path) => path.split('/');
const splitingRight = (path) => path.split('\\');

const deleteFile = async (path, newName) => {
  try {
    if (splitingLeft(newName).length > 1 || splitingRight(newName).length > 1) {
      throw new Error('Incorect newName');
    }

    const parentPath = getParentPath(path);
    const newPath = join(parentPath, newName);

    await rename(getPath(path), `${newPath}`);
    stdout.write(`File has been renamed${EOL}${EOL}`);
  } catch (error) {
    console.error(fail);
  }
};

export default deleteFile;
