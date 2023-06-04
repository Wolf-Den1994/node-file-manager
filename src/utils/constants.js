export const invalid = 'Invalid input';
export const fail = 'Operation failed';

export const allCommands = [
  {
    command: '.exit',
    info: 'Finish to use File Manager',
  },
  {
    command: 'ls',
    info: 'List all files and folder in current directory and print',
  },
  {
    command: 'up',
    info: 'Go upper from current directory',
  },
  {
    command: 'cd',
    info: 'Go to dedicated folder from current directory',
  },
  {
    command: 'cat path_to_file',
    info: 'Read file and print content',
  },
  {
    command: 'add new_file_name',
    info: 'Create empty file in current working directory',
  },
  {
    command: 'rn path_to_file new_filename',
    info: 'Rename file',
  },
  {
    command: 'cp path_to_file path_to_new_directory',
    info: 'Copy file',
  },
  {
    command: 'mv path_to_file path_to_new_directory',
    info: 'Move file',
  },
  {
    command: 'rm path_to_file',
    info: 'Delete file',
  },
  {
    command: 'os --EOL',
    info: 'Get EOL (default system End-Of-Line)',
  },
  {
    command: 'os --cpus',
    info: 'Get host machine CPUs info',
  },
  {
    command: 'os --homedir',
    info: 'Get home directory',
  },
  {
    command: 'os --username',
    info: 'Get current system user name',
  },
  {
    command: 'os --architecture',
    info: 'Get CPU architecture',
  },
  {
    command: 'hash path_to_file',
    info: 'Calculate hash for file and print',
  },
  {
    command: 'compress path_to_file path_to_destination',
    info: 'Compress file',
  },
  {
    command: 'decompress path_to_file path_to_destination',
    info: 'Decompress file',
  },
];
