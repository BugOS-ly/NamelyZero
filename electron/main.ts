import { app, BrowserWindow } from 'electron'
import path from 'path'
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

let mainWin: BrowserWindow | null

function createWindow() {
  // 创建浏览器窗口
  mainWin = new BrowserWindow({
    frame: false,
    width: 1120, // 实际W=1400
    height: 800, // 实际H=1000
    minWidth: 1120,
    minHeight: 800,
    transparent: true,
    backgroundColor: '#00000000',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // 取消默认菜单
  // Menu.setApplicationMenu(null)

  // 加载 index.html
  if (process.env.NODE_ENV !== 'development') {
    mainWin.loadFile(path.join(__dirname, '../index.html'))
  } else {
    mainWin.loadURL(
      `http://${process.env['VITE_DEV_SERVER_HOSTNAME']}:${process.env['VITE_DEV_SERVER_PORT']}`
    )
  }

  // 打开开发工具
  mainWin.webContents.openDevTools()

  minimize(mainWin)

  miniClose(mainWin)
}

// 窗口最小化
function minimize(mainWin: BrowserWindow | null) {
  mainWin?.on('minimize', (ev: any) => {
    // 阻止最小化
    ev.preventDefault()
    // 隐藏窗口
    mainWin.hide()
  })
}

// 关闭窗口，最小化到托盘
function miniClose(mainWin: BrowserWindow | null) {
  mainWin?.on('close', (ev) => {
    // 阻止关闭
    ev.preventDefault()
    // 隐藏窗口
    mainWin.hide()
  })
}

/**
 * 这段程序将会在 Electron 结束初始化和创建浏览器窗口的时候调用；
 * 部分 API 在 ready 事件触发后才能使用。
 */
app.whenReady().then(() => {
  createWindow()

  // 允许跨域
  mainWin?.webContents.session.webRequest.onBeforeSendHeaders(
    (details, callback) => {
      callback({
        requestHeaders: { Origin: '*', ...details.requestHeaders }
      })
    }
  )
  mainWin?.webContents.session.webRequest.onHeadersReceived(
    (details, callback) => {
      callback({
        responseHeaders: {
          'Access-Control-Allow-Origin': ['*'],
          ...details.responseHeaders
        }
      })
    }
  )

  app.on('activate', function (e) {
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

/**
 * 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
 * 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
 */
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
