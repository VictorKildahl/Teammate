import { app } from 'electron';
import path from 'path';

const { menubar } = require('menubar');

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const mb = menubar({
  index: `http://localhost:1212/`,
  icon: path.join(process.cwd(), './assets/icons/t.png'),
  browserWindow: {
    width: 600,
    height: 700,
    minwidth: 600,
    minheight: 700,
    maxwidth: 600,
    maxheight: 700,
    useContentSize: true,
    webPreferences: {
      contextIsolation: false,
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  },
});

// require('electron-debug')();
