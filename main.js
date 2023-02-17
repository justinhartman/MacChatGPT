/**
 * The main Electron process that handles the browser window app.
 * @author Justin Hartman <code@justhart.com>
 * @copyright Copyright (c) 2023 Justin Hartman. All rights reserved.
 * @license MIT
 * @link https://justhart.com Justin Hartman
 */
const { app, BrowserWindow } = require('electron');

/**
 * Create the main window.
 * @returns {Electron.BrowserWindow}
 * @constructor
 * @see https://www.electronjs.org/docs/latest/api/browser-window
 */
const createWindow = () => {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    useContentSize: true,
    title: 'MacChatGPT',
    webPreferences: {
      contextIsolation: true,
      enablePreferredSizeMode: true,
      nodeIntegration: false
    }
  });

  /**
   * Load the OpenAI chat page.
   * @param {string} url - The URL to load.
   * @param {Electron.LoadURLOptions} options - Options for loading the URL.
   * @returns {void}
   * @see https://www.electronjs.org/docs/latest/api/browser-window#winloadurlurl-options
   */
  win.loadURL('https://chat.openai.com/chat');
};

/**
 * When Electron has finished initialisation and is ready to create browser windows.
 * Some APIs can only be used after this event occurs.
 * @returns {Promise<void>}
 * @see https://www.electronjs.org/docs/latest/api/app#event-ready
 */
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

/**
 * Quit when all windows are closed, except on macOS. There, it's common for applications
 * and their menu bar to stay active until the user quits explicitly with `command + Q`.
 * @see https://www.electronjs.org/docs/latest/api/app#event-window-all-closed
 */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
