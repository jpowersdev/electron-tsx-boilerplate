import { app, BrowserWindow, ipcMain, IpcMainEvent, IpcMain } from 'electron';
declare var MAIN_WINDOW_WEBPACK_ENTRY: any;
declare var SECONDARY_WINDOW_WEBPACK_ENTRY: any;

if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow: Electron.BrowserWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow.destroy();
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('create-secondary-window', (event: IpcMainEvent) => {
  const secondaryWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  secondaryWindow.loadURL(SECONDARY_WINDOW_WEBPACK_ENTRY);

  // secondaryWindow.webContents.openDevTools();

  secondaryWindow.on('closed', () => {
    secondaryWindow.destroy();
  });
});
