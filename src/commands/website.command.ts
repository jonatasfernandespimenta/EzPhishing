import { websiteService } from '../services/website.service';
import { rl } from '../interfaces/interfaces';

export class websiteCommands extends websiteService {

  cloneWebsite() {
    return this.websiteCloner();
  }

  createServer() {
    this.createServer();
  }

}
