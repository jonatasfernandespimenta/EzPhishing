const fs = require('fs');
const path = require('path');

export const folderCreation = (dir: string) => {
  const pathName = path.resolve(__dirname, '..', '..', 'servers', dir);

  if (!fs.existsSync(pathName)) {
    fs.mkdirSync(pathName);
  }

  return { path: pathName.toString() };
};

export const indexCreation = (dir: string, port: string, dbName: string) => {
  const file = path.resolve(dir, 'index.js');
  const indexTemplatePath = path.resolve(__dirname, '..', 'serverTemplates', 'index.template.txt');

  fs.readFile(indexTemplatePath, (err: any, data: string) => {
    const content = data.toString().replace('port', port).replace('DB_NAME', dbName);

    fs.writeFile(file, content, (err: any) => {
      if (err) throw err;
    });
  });
};
