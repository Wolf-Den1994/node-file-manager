import { allCommands } from '../utils/constants.js';

const showHelp = () => {
  console.table(allCommands);
};

export default showHelp;
