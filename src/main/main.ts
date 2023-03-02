import { app } from 'electron';
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

menubar({
  index: resolveHtmlPath('index.html'),
  // index: `http://localhost:1212/`,
  icon: app.isPackaged
    ? path.join(process.resourcesPath, './assets/icons/t.png')
    : path.join(process.cwd(), './assets/icons/t.png'),
  browserWindow: {
    width: 600,
    height: 700,
    minwidth: 600,
    minheight: 700,
    maxwidth: 600,
    maxheight: 700,
    useContentSize: true,
  },
});

// require('electron-debug')();
