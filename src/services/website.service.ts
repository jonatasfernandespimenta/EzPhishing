import { rl } from '../interfaces/interfaces';
import { folderCreation } from '../utils/folderCreation';

const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');
const path = require('path');

export class websiteService {
  websiteCloner = () => {
    let websiteLocation = '';
    rl.question('Enter the URL of the website you want to clone: ', (url) => {

      const splitHttps = url.includes('https://') ? url.split('https://') : url.split('http://');
      const siteName = splitHttps[1].split('.')[0];

      scrape({
        urls: [url],
        directory: path.resolve(__dirname, '..', '..', 'cloned_pages', siteName),
        plugins: [ 
          new PuppeteerPlugin({
            launchOptions: { 
              headless: true
            },
            scrollToBottom: {
              timeout: 10000, 
              viewportN: 10 
            }
          })
        ]
      });

      websiteLocation = path.resolve(__dirname, '..', '..', 'cloned_pages', siteName);
    });

    return {'done': true, 'message': `The website folder can be located at ${websiteLocation}`}
  }

  createServer() {

    rl.question('What is going to be your server folder name?: ', (name) => {
      folderCreation(name)
    })

  }

}
