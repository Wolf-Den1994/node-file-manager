import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { getPath } from '../path/path.js';

const compress = async (pathFile, pathCompress) => {
  return await new Promise((resolve, reject) => {
    const input = createReadStream(getPath(pathFile));
    const output = createWriteStream(getPath(pathCompress));
    const brot = createBrotliCompress();

    const stream = input.pipe(brot).pipe(output);
    stream.on('finish', () => resolve('File has been compressed!'))
    stream.on('error', (error) => reject(error))
  });
};

export default compress;
