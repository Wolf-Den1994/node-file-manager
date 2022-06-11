import { cpus, EOL } from 'os';
import { stdout } from 'node:process';

const getCPUS = () => {
  stdout.write(`Overall amount of CPUS: ${cpus().length}${EOL}`);
  console.table(
    cpus().map((item) => ({
      model: item.model.split('CPU @')[0].trim(),
      speed: item.model.split('CPU @')[1].trim(),
    }))
  );
};

export default getCPUS;
