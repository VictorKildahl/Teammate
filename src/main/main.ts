import { app, ipcMain } from 'electron';
import path from 'path';

const { menubar } = require('menubar');

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

function resolveHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}

const mb = menubar({
  index: resolveHtmlPath('index.html'),
  // index: `http://localhost:1212/`,
  icon: app.isPackaged
    ? path.join(process.resourcesPath, './assets/icons/mascot.png')
    : path.join(process.cwd(), './assets/icons/mascot.png'),
  showDockIcon: false,
  browserWindow: {
    width: 600,
    height: 700,
    minwidth: 600,
    minheight: 700,
    maxwidth: 600,
    maxheight: 700,
    useContentSize: true,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  },
});

mb.on('after-create-window', () => {
  app.dock.hide();
});

ipcMain.on('closeApp', (event, arg) => {
  app.quit();
});

app.setLoginItemSettings({
  openAtLogin: true,
});

// app.whenReady().then(() => {
//   app.dock.hide();
// });

// require('electron-debug')();

// Working locally
// import { BrowserWindow, ipcMain, shell } from 'electron';
// import log from 'electron-log';
// import { autoUpdater } from 'electron-updater';
// import MenuBuilder from './menu';
// import { resolveHtmlPath } from './util';

// class AppUpdater {
//   constructor() {
//     log.transports.file.level = 'info';
//     autoUpdater.logger = log;
//     autoUpdater.checkForUpdatesAndNotify();
//   }
// }

// let mainWindow: BrowserWindow | null = null;

// ipcMain.on('ipc-example', async (event, arg) => {
//   const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
//   console.log(msgTemplate(arg));
//   event.reply('ipc-example', msgTemplate('pong'));
// });

// if (process.env.NODE_ENV === 'production') {
//   const sourceMapSupport = require('source-map-support');
//   sourceMapSupport.install();
// }

// const isDebug =
//   process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

// const closeDebug = false;

// if (isDebug) {
//   require('electron-debug')();
// }

// const installExtensions = async () => {
//   const installer = require('electron-devtools-installer');
//   const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
//   const extensions = ['REACT_DEVELOPER_TOOLS'];

//   return installer
//     .default(
//       extensions.map((name) => installer[name]),
//       forceDownload
//     )
//     .catch(console.log);
// };

// const createWindow = async () => {
//   if (isDebug) {
//     await installExtensions();
//   }

//   mainWindow = new BrowserWindow({
//     show: false,
//     width: 1024,
//     height: 728,
//     webPreferences: {
//       preload: app.isPackaged
//         ? path.join(__dirname, 'preload.js')
//         : path.join(__dirname, '../../.erb/dll/preload.js'),
//     },
//   });

//   mainWindow.loadURL(resolveHtmlPath('index.html'));

//   mainWindow.on('ready-to-show', () => {
//     if (!mainWindow) {
//       throw new Error('"mainWindow" is not defined');
//     }
//     if (process.env.START_MINIMIZED) {
//       mainWindow.minimize();
//     } else {
//       mainWindow.show();
//     }
//   });

//   mainWindow.on('closed', () => {
//     mainWindow = null;
//   });

//   const menuBuilder = new MenuBuilder(mainWindow);
//   menuBuilder.buildMenu();

//   // Open urls in the user's browser
//   mainWindow.webContents.setWindowOpenHandler((edata) => {
//     shell.openExternal(edata.url);
//     return { action: 'deny' };
//   });

//   // Remove this if your app does not use auto updates
//   // eslint-disable-next-line
//   new AppUpdater();
// };

// app.on('window-all-closed', () => {
//   // Respect the OSX convention of having the application in memory even
//   // after all windows have been closed
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app
//   .whenReady()

//   .then(() => {
//     createWindow();
//     app.on('activate', () => {
//       // On macOS it's common to re-create a window in the app when the
//       // dock icon is clicked and there are no other windows open.
//       if (mainWindow === null) createWindow();
//     });
//   })
//   .catch(console.log);
