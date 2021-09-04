import { appCommands } from "./commands/init.commands";

class Init extends appCommands {
  start() {
    this.init();
  }

}
const init = new Init();

init.start();
