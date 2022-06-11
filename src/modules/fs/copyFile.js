import { createReadStream, createWriteStream } from 'fs';
import { fail } from '../../utils/constants.js';
import { getPath } from '../path/path.js';

const copyFile = async (path, newPath) => {
  try {
    return new Promise((resolve, reject) => {
      console.log('getPath(path)', getPath(path));
      console.log('getPath(newPath)', getPath(newPath));
      const input = createReadStream(getPath(path));
      const output = createWriteStream(getPath(newPath));

      input.on('error', (error) => reject(error));

      const stream = input.pipe(output);

      stream.on('error', (error) => reject(error));
      stream.on('finish', () => resolve('File has been copied'));
    });
  } catch (error) {
    console.error(fail);
  }
};

export default copyFile;
