const {BrowserWindow, app} = require('electron')
require('./src/index.js')

let mainWindow = null

function main(){
  mainWindow = new BrowserWindow({
    kiosk:true,
    autoHideMenuBar:true,
  })
  mainWindow.loadURL('http://localhost:5000')
  mainWindow.on('close', event =>{
    mainWindow = null
  })
}

app.on('ready', main)