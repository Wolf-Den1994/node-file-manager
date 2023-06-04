import { readdir } from 'fs/promises';
import { fail } from '../../utils/constants.js';

const getFiles = async (path) => {
  try {
    return await readdir(path);
  } catch (error) {
    return fail;
  }
};

export default getFiles;
