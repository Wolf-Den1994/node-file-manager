import crypto from 'crypto';
import { createReadStream } from 'fs';
import { fail } from '../utils/constants.js';
import { getPath } from './path/path.js';

const calculateHash = async (command) => {
  const path = getPath(command);

  try {
    return await new Promise((resolve, reject) => {
      const hash = crypto.createHash('sha256');
      const stream = createReadStream(path);
      stream.on('error', (err) => reject(err));
      stream.on('data', (chunk) => hash.update(chunk));
      stream.on('end', () => resolve(hash.digest('hex')));
    });
  } catch (error) {
    console.error(fail);
  }
};

export default calculateHash;
