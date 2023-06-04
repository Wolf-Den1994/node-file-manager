import { cpus, EOL } from 'os';
import { stdout } from 'node:process';

const calcSpeed = (speed) => {
  const calc = speed / 1000;
  return calc < 0.1 ? calc * 100 : calc;
};

const getCPUS = () => {
  stdout.write(`Overall amount of CPUS: ${cpus().length}${EOL}`);
  console.table(
    cpus().map((item) => ({
      model: item.model.split('CPU @')[0].trim(),
      speed: `${calcSpeed(item.speed)} GHz`,
    }))
  );
};

export default getCPUS;
