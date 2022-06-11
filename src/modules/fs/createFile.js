import { createWriteStream } from 'fs';
import { stdout } from 'node:process';
import { EOL } from 'os';
import { fail } from '../../utils/constants.js';
import { getPath } from '../path/path.js';

const createFile = async (path) => {
  try {
    createWriteStream(getPath(path));
    stdout.write(`File has been created${EOL}${EOL}`);
  } catch (error) {
    console.error(fail);
  }
};

export default createFile;
