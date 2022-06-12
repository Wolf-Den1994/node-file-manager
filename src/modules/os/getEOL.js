import { EOL } from 'os';
import { stdout } from 'node:process';

const getEOL = () =>
  stdout.write(
    `Default system End-Of-Line: ${JSON.stringify(EOL)}${EOL}${EOL}`
  );

export default getEOL;
