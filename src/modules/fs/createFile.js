import { createWriteStream } from 'fs';
import { fail } from '../../utils/constants.js';
import { getPath } from '../path/path.js';

const createFile = async (path) => {
  try {
    return new Promise((resolve, reject) => {
      const stream = createWriteStream(getPath(path));
      stream.on('error', (error) => reject(error));
      stream.on('finish', () => resolve('File has been created'));
      stream.close();
    });
  } catch (error) {
    console.error(fail);
  }
};

export default createFile;
