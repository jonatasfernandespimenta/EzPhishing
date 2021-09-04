import { websiteCommands } from "./website.command";
import { rl } from '../interfaces/interfaces';

export class appCommands extends websiteCommands {
  init() {
    console.log(
      'Available Commands: ',
      '\n01 - Website Cloner'
    )

    rl.question('\n> ', (answer) => {
      switch (answer) {
        case '01':
          this.websiteCloner();
          break;
        default:
          console.log('Invalid Command');
          this.init();
          break;
      }
    })

  }
}
