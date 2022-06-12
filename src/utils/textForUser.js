import { EOL } from 'os';

export const sendByeText = (username) =>
  console.log(`Thank you for using File Manager, ${username}!`);

export const userAreInRootPath = () =>
  console.log(`WARNING: You are in root directory ${EOL}`);
