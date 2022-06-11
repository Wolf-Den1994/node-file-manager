import { argv, chdir, cwd, stdin, stdout } from 'node:process';
import { EOL } from 'os';
import { getName, finishWork, onStop } from './modules/processes.js';
import getFiles from './modules/fs/getFiles.js';
import { createStartPath, getPath } from './modules/path/path.js';
import up from './modules/path/up.js';
import { fail } from './utils/constants.js';
import customOS from './modules/os/index.js';
import calculateHash from './modules/hash.js';

const index = async () => {
  createStartPath();
  getName(argv);
  stdin.on('data', async (data) => {
    const input = data.toString().trim().split(' ');
    const command = input[0];
    const additionalCommand = input[1];
    // console.log('additionalCommand', additionalCommand)
    // console.log('input', input);
    // console.log('data', data.toString().trim());
    stdout.write(EOL);
    switch (command) {
      case 'exit':
      case '.exit':
        finishWork();
        break;

      case 'ls':
        const files = await getFiles(cwd());
        console.log(`files:${EOL}`, files, EOL);
        break;

      case 'up':
        try {
          up();
        } catch (error) {
          console.error(fail);
        }
        break;

      case 'cd':
        if (additionalCommand) {
          try {
            chdir(additionalCommand);
          } catch (error) {
            console.error(fail);
          }
        } else {
          console.error(fail);
        }
        break;

      case 'os':
        if (additionalCommand) {
          customOS(additionalCommand);
        } else {
          console.error(fail);
        }
        break;

      case 'hash':
        if (additionalCommand) {
          try {
            const hash = await calculateHash(additionalCommand);
            stdout.write(`Hash: ${hash}${EOL}${EOL}`);
          } catch (error) {
            console.error(fail);
          }
        } else {
          console.error(fail);
        }
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

index();
