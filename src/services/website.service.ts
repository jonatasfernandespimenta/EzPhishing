import { exec } from 'child_process';
import { rl } from '../interfaces/interfaces';
import { folderCreation, indexCreation } from '../utils/folderCreation';

const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');
const path = require('path');

export class WebsiteService {
  websiteCloner = () => {
    let websiteLocation = '';
    rl.question('Enter the URL of the website you want to clone: ', (url) => {
      const splitHttps = url.includes('https://') ? url.split('https://') : url.split('http://');
      const siteName = splitHttps[1].includes('www') ? splitHttps[1].split('www')[1].split('.')[1] : splitHttps[1].split('.')[0];

      scrape({
        urls: [url],
        directory: path.resolve(__dirname, '..', '..', 'cloned_pages', siteName),
        plugins: [
          new PuppeteerPlugin({
            launchOptions: {
              headless: true,
            },
            scrollToBottom: {
              timeout: 10000,
              viewportN: 10,
            },
          }),
        ],
      });

      websiteLocation = path.resolve(__dirname, '..', '..', 'cloned_pages', siteName);
    });

    return { done: true, message: `The website folder can be located at ${websiteLocation}` };
  };

  createServer() {
    let folderRes = { path: '' };

    rl.question('What is going to be your server folder name?: ', (name) => {
      rl.question('What is going to be your server port?: ', (port) => {
        rl.question('What is your database name?: ', (dbName) => {
          rl.question('What is your website folder name?: ', (websiteFolder) => {
            folderRes = folderCreation(name);
            indexCreation(folderRes.path, port, dbName);

            const siteLocation = path.resolve(__dirname, '..', '..', 'cloned_pages', websiteFolder);

            exec(`
              cd ${path.resolve('servers', name)} && 
              npm init -y && 
              mkdir ${path.resolve('servers', name, 'public')} &&
              npm i mongoose && npm i express && npm i cors &&
              cp -r ${siteLocation} ${path.resolve('servers', name, 'public')}
            `);

            rl.close();
          });
        });
      });
    });
  }
}
