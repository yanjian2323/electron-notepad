const { app, BrowserWindow, Menu, MenuItem } = require('electron')
const path = require('path')

const menuTemplate = require('./menu')

let win = null
const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
  })
  const menu = Menu.buildFromTemplate(menuTemplate)
  
  // 新建
  menu.items[1].submenu.items[0].click = () => {
    console.log('new')
    win.webContents.send('action', 'new')
  }
  // 打开
  menu.items[1].submenu.items[1].click = () => {
    console.log('open')
    win.webContents.send('action', 'open')
  }
  // 保存
  menu.items[1].submenu.items[2].click = () => {
    console.log('save')
    win.webContents.send('action', 'save')
  }

  Menu.setApplicationMenu(menu)

  win.loadFile(path.join(__dirname, 'index.html'))

  win.on('ready-to-show', () => {
    win.show()
  })

  win.on('close', () => {

  })

}

app.on('ready', createWindow)

app.on('activate', () => {
  if (process.platform === 'darwin') {
    createWindow()
  }
})

app.on('window-all-closed', () => {

})