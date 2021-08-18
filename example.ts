import * as noti from './mod.ts';

let commands: string[] = [];

commands = noti.addTitle(commands, 'Hello');
commands = noti.addSubTitle(commands, 'World!');
commands = noti.addMessage(commands, 'Look at this page');
commands = noti.addOpenUrl(commands, 'https://github.com/dennisolien')

noti.sendNotification(commands);