import { env } from 'node:process';
import { fileURLToPath } from 'url';
import { dirname, sep, parse } from 'path';

export const getDirmame = (metaUrl) => dirname(fileURLToPath(metaUrl));

export const getHomedir = () => env.HOME || env.USERPROFILE;

export const createStartPath = () => {
  env.userpath = env.HOME || env.USERPROFILE;
  process.chdir(env.userpath);
};

export const getParentPath = (filename) => dirname(filename).split(sep).pop();

export const getBasePath = (filename) => parse(filename).root
