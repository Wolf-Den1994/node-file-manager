import { createReadStream } from 'fs';
import { stdout } from 'node:process';
import { fail } from '../../utils/constants.js';
import { getPath } from '../path/path.js';

const readFile = async (path) => {
  try {
    return new Promise((resolve, reject) => {
      const stream = createReadStream(getPath(path));
      stream.on('error', (error) => reject(error));
      stream.on('data', (data) => {
        stdout.write(data);
      });
      stream.on('close', () => resolve());
    });
  } catch (error) {
    console.error(fail);
  }
};

export default readFile;
