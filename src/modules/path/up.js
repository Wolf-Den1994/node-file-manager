import { cwd, chdir } from 'node:process';
import { userAreInRootPath } from '../../utils/textForUser.js';
import { getBasePath } from './path.js';

const up = () => {
  if (getBasePath(cwd()) === cwd()) {
    userAreInRootPath();
  } else {
    chdir('../');
  }
};

export default up;
