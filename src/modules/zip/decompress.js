import { createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { getPath } from '../path/path.js';

const decompress = async (pathZip, pathDecompress) => {
  return await new Promise((resolve, reject) => {
    const input = createReadStream(getPath(pathZip));
    const output = createWriteStream(getPath(pathDecompress));
    const brot = createBrotliDecompress();

    input.on('error', (error) => reject(error));

    const stream = input.pipe(brot).pipe(output);
    stream.on('finish', () => resolve('File has been decompressed!'));
    stream.on('error', (error) => reject(error));
  });
};

export default decompress;
