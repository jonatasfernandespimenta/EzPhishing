const fs = require('fs');
const path = require('path');

export const folderCreation = (dir: string) => {

  const pathName = path.resolve(__dirname, '..', '..', 'servers', dir)

  if (!fs.existsSync(pathName)){
    fs.mkdirSync(pathName);
  }
}
