import { userInfo, EOL } from 'os';
import { stdout } from 'node:process';

const getUsername = () =>
  stdout.write(`System user name: ${userInfo().username}${EOL}${EOL}`);

export default getUsername;
