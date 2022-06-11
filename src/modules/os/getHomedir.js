import { homedir, EOL } from 'os';
import { stdout } from 'node:process';

const getHomeDir = () => stdout.write(`Home directory: ${homedir()}${EOL}${EOL}`);

export default getHomeDir;
