import { createReadStream, createWriteStream } from 'fs';
import { basename, join } from 'path';
import { fail } from '../../utils/constants.js';
import { getPath } from '../path/path.js';

const copyFile = async (path, newPath) => {
  try {
    return new Promise((resolve, reject) => {
      try {
        const file = basename(path);
        const newFile = join(newPath, file);

        const input = createReadStream(getPath(path));
        const output = createWriteStream(getPath(newFile));

        input.on('error', (error) => reject(error));

        const stream = input.pipe(output);

        stream.on('error', (error) => reject(error));
        stream.on('finish', () => resolve('File has been copied'));
      } catch (error) {
        console.error(fail);
      }
    });
  } catch (error) {
    console.error(fail);
  }
};

export default copyFile;
