import { argv, chdir, cwd, stdin, stdout } from 'node:process';
import { EOL } from 'os';
import { getName, finishWork, onStop } from './processes.js';
import getFiles from './fs/getFiles.js';
import { createStartPath, getBasePath } from './path.js';
import { userAreInRootPath } from '../utils/textForUser.js';

const main = async () => {
  createStartPath();
  getName(argv);
  stdin.on('data', async (data) => {
    const input = data.toString().trim();
    stdout.write(EOL);
    switch (input) {
      case 'exit':
      case '.exit':
        finishWork();
        break;
      case 'ls':
        const files = await getFiles(cwd());
        console.log(`files:${EOL}`, files);
        break;
      case 'up':
        try {
          if (getBasePath(cwd()) === cwd()) {
            userAreInRootPath();
          } else {
            chdir('../');
          }
          // process.chdir(env.userpath)
        } catch (error) {
          console.log(error);
        }
        // я делал проверку path.isAbsolute, если true, то использую как есть, если false, то join и resolve
        // updateDirectory = join(homeDirectory, ' ??' )
        break;
      default:
        stdout.write(`Invalid input${EOL}${EOL}`);
        break;
    }
    stdout.write(`Please, print commands and wait for results:${EOL}${EOL}`);
    stdout.write(`You are currently in ${cwd()}${EOL}${EOL}`);
  });

  onStop();

  // копирование Streams. Createreadstream, createwritestream

  //createBrotliCompress
};

main();
