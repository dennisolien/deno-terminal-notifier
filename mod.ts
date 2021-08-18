export const addTitle = (commands: string[], title: string) => [...commands, '-title', title];
export const addSubTitle = (commands: string[], subtitle: string) => [...commands, '-subtitle', subtitle];
export const addMessage = (commands: string[], message: string) => [...commands, '-message', message];
export const addRunCommand = (commands: string[], command: string) => [...commands, '-execute', command];
export const addAppIcon = (commands: string[], appIcon: string) => [...commands, '-appIcon', appIcon];
export const addOpenUrl = (commands: string[], url: string) => [...commands, '-open', url];

// appId eg: 'com.apple.AddressBook'
export const addOpenApp = (commands: string[], appId: string) => [...commands, '-activate', appId];

export async function sendNotification(data: string[]):Promise<void> {
  // should validate data
  const p = Deno.run({
    cmd: [
      "terminal-notifier",
      ...data,
    ],
  });
      
  await p.status();
}