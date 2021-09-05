import packageJson from '../assets/export-package.json';

const fs = require('fs');
const path = require('path');

export const folderCreation = (dir: string) => {
  const pathName = path.resolve(__dirname, '..', '..', 'servers', dir);

  if (!fs.existsSync(pathName)) {
    fs.mkdirSync(pathName);
  }

  return { path: pathName.toString() };
};

export const packageJsonCreation = (dir: string) => {
  const file = path.resolve(dir, 'package.json');
  fs.writeFileSync(file, JSON.stringify(packageJson, null, 2));
};

export const indexCreation = (dir: string, port: string) => {
  const file = path.resolve(dir, 'index.js');
  const indexTemplatePath = path.resolve(__dirname, '..', 'serverTemplates', 'index.template.txt');

  fs.readFile(indexTemplatePath, (err: any, data: string) => {
    const content = data.toString().replace('port', port);

    fs.writeFile(file, content, (err2: any) => {
      if (err2) throw err2;
    });
  });
};
