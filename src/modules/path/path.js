import { env, cwd } from 'node:process';
import { fileURLToPath } from 'url';
import { dirname, sep, parse, isAbsolute, join } from 'path';

export const getDirmame = (metaUrl) => dirname(fileURLToPath(metaUrl));

export const getHomedir = () => env.HOME || env.USERPROFILE;

export const getParentPath = (filename) => dirname(filename).split(sep).pop();

export const getBasePath = (filename) => parse(filename).root;

export const getPath = (path) => (isAbsolute(path) ? path : join(cwd(), path));

export const createStartPath = () => {
  env.userpath = env.HOME || env.USERPROFILE;
  process.chdir(env.userpath);
};
