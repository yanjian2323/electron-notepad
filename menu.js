module.exports = [{
  label: 'electron-notepad',
  submenu: [{
    label: '关于',
    role: 'about',
  }]
},{
  label: '文件',
  submenu: [{
    label: '新建',
    accelerator: 'Cmd+N',
  }, {
    label: '打开',
    accelerator: 'Cmd+O',
  }, {
    label: '保存',
    accelerator: 'Cmd+S',
  }, {
    type: 'separator',
  }, {
    label: '退出',
    role: 'quit',
  }]
 },{
  label: '编辑',
  submenu: [{
    label: '撤销',
    role: 'undo',
  }, {
    label: '重做',
    role: 'redo',
  }, {
    type: 'separator',
  }, {
    label: '剪切',
    role: 'cut',
  }, {
    label: '复制',
    role: 'copy',
  }, {
    label: '粘贴',
    role: 'paste',
  }, {
    label: '带样式粘贴',
    role: 'pastandmatchstyle',
  }, {
    label: '删除',
    role: 'delete',
  }, {
    label: '选择所有',
    role: 'selectall'
  }]
 }, {
  label: '视图',
  submenu: [{
    label: '开发者工具',
    role: 'toggledevtools',
  }, {
    label: '放大',
    role: 'zoomin',
  }, {
    label: '缩小',
    role: 'zoomout',
  }, {
    label: '重制缩放',
    role: 'resetzoom',
  }, {
    type: 'separator',
  }, {
    label: '全屏',
    role: 'togglefullscreen',
  }]
}] 