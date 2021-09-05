import { websiteCommands } from './website.command';
import { rl } from '../interfaces/interfaces';

export class appCommands extends websiteCommands {
  init() {
    console.log(
      'Available Commands: ',
      '\n01 - Website Cloner',
      '\n02 - Create Server',
    );

    rl.question('\n> ', (answer) => {
      switch (answer) {
        case '01':
          this.websiteCloner();
          break;

        case '02':
          this.serverCreation();
          break;

        default:
          console.log('Invalid Command');
          this.init();
          break;
      }
    });
  }
}
