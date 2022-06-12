import { fail } from '../../utils/constants.js';
import getEOL from './getEOL.js';
import getCPUS from './getCPUS.js';
import getHomeDir from './getHomedir.js';
import getUsername from './getUserName.js';
import getArchitecture from './getArchitecture.js';

const customOS = (operation) => {
  switch (operation) {
    case '--EOL':
      getEOL();
      break;

    case '--cpus':
      getCPUS();
      break;

    case '--homedir':
      getHomeDir();
      break;

    case '--username':
      getUsername();
      break;

    case '--architecture':
      getArchitecture();
      break;

    default:
      console.error(fail);
      break;
  }
};

export default customOS;
