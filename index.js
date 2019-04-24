const { remote, ipcRenderer } = require('electron')
const { dialog } = remote
const fs = require('fs')

// 是否保存过
let isSaved = true
// 用来 在保存的时候 判断是弹出保存文件框 还是直接保存
let currentFile = null 

txtArea.addEventListener('input', () => {
  if (isSaved) {
    document.title += ' *'
  }
  isSaved = false
}, false)

function createFile() {
  askIfSave()
  isSaved = true
  currentFile = null
  document.title = 'Untitled'
  txtArea.value = ''
}

function openFile() {
  askIfSave()
  const [filePath] = dialog.showOpenDialog({
      filters: [{
        name: '文本文件',
        extensions: ['json','js','html','css','md'],
      }, {
        name: '所有文件',
        extensions: ['*'],
      }],
      properties: ['openFile', 'createDirectory'],
    })
  if (filePath) {
    const content = fs.readFileSync(filePath)
    txtArea.value = content
    document.title = filePath
    isSaved = true
    currentFile = filePath 
  }
}

function saveFile() {
  let filePath
  if (!currentFile) {
    filePath = dialog.showSaveDialog({
      filters: [{
          name: '文本文件',
          extensions: ['json','js','html','css','md'],
        }, {
          name: '所有文件',
          extensions: ['*'],
      }],
    })
    currentFile = filePath
  }
  
  if (currentFile) {
    const content = txtArea.value
    fs.writeFileSync(currentFile, content)
    document.title = currentFile
    isSaved = true
  }
}

// 询问是否保存
function askIfSave() {
  if (isSaved) return
  const result = dialog.showMessageBox({
    message: '你是否要保存当前文档?',
    type: 'question',
    buttons: ['确定', '取消'],
  })
  if (result === 0) {
    saveFile()
  }
}


ipcRenderer.on('action', (e, action) => {
  switch(action) {
    case "new":
      createFile()
      break
    case "open":
      openFile()
      break
    case "save":
      saveFile()
      break
  }
})