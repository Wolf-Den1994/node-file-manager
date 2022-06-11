import { arch, stdout } from 'node:process'
import { EOL } from 'os';

const getArchitecture = () => stdout.write(`CPU architecture: ${arch}${EOL}${EOL}`);

export default getArchitecture;