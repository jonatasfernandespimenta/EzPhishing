import { websiteService } from '../services/website.service';
import { rl } from '../interfaces/interfaces';

export class websiteCommands extends websiteService {

  cloneWebsite() {
    this.websiteCloner();
  }
}
