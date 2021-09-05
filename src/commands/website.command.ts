import { WebsiteService } from '../services/website.service';
import { rl } from '../interfaces/interfaces';

export class websiteCommands extends WebsiteService {
  cloneWebsite() {
    return this.websiteCloner();
  }

  serverCreation() {
    this.createServer();
  }
}
