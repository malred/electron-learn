const { app, BrowserWindow, ipcMain, dialog, globalShortcut, Menu, desktopCapturer } = require('electron')
const path = require('path')
const mainMenu = require('./mainMenu')
const createTray = require('./mainTray')
const WinState = require('electron-win-state').default
const winState = new WinState({
    defaultWidth: 800,
    defaultHeight: 600,
})
// const mainMenu = Menu.buildFromTemplate([
//     {
//         label: 'electron',
//         submenu: [
//             {
//                 label: 'submenu-1',
//             },
//             {
//                 label: 'submenu-2',
//             }
//         ]
//     },
//     {
//         // role --> electron提供的菜单
//         label: 'edit',
//         submenu: [
//             { role: 'undo' },
//             { role: 'redo' },
//             { role: 'copy' },
//             { role: 'paste' },
//         ]
//     },
//     {
//         label: 'action',
//         submenu: [
//             {
//                 // 弹出调试窗
//                 label: 'DevTools',
//                 role: 'toggleDevTools'
//             },
//             {
//                 // 全屏
//                 role: 'togglefullscreen'
//             }
//         ]
//     },
//     {
//         label: 'greet',
//         // 点击事件
//         click: () => {
//             dialog.showOpenDialog({
//                 buttonLabel: '选择',
//                 defaultPath: app.getPath('desktop'),
//                 // multiSelections->可以多选
//                 // createDirectory->可以创建文件夹
//                 // openFile->可以打开文件
//                 // openDirectory->只能打开文件夹
//                 properties: ['multiSelections', 'createDirectory', 'openFile']
//             }).then((res) => {
//                 console.log(res.filePaths);
//             })
//         },
//         // 设置快捷键
//         accelerator: 'Shift+Alt+G',
//     }
// ])
let contextMenu = Menu.buildFromTemplate([
    { label: 'item 1' },
    { role: 'editMenu' }
])
const createWindow = () => {
    const win = new BrowserWindow({
        // 使用这个,可以从上一次的窗口大小和位置打开 
        ...winState.winOptions,
        // width: 1000,
        // height: 800,
        // 不显示顶部内容 
        // frame: false,
        backgroundColor: '#2e2c29',
        show: false,
        webPreferences: {
            // 使用node
            // nodeIntegration: true, // 开启后会关闭沙盒
            // 沙盒
            // 当 Electron 中的渲染器进程被沙盒化时，
            // 它们的行为方式与常规 Chrome 渲染器相同。
            // 沙盒渲染器不会初始化 Node.js 环境。
            sandbox: false,
            // 关闭进程隔离
            // contextIsolation: false,
            // 预加载(请求index.html前执行),必须是绝对路径
            preload: path.join(__dirname, 'preload.js')// 运行在渲染进程
        }
    })
    // 可以把做好的h5应用嵌入
    // win.loadURL('https://github.com')
    // win.loadURL('http://124.71.223.30:2233')
    // 加载本地文件
    win.loadFile('index.html')
    // 关闭安全警告
    // process.env['ELECTRONO_DISABLE_SECURITY_WARNINGS'] = 'true'
    // 页面加载完毕的事件 
    const wc = win.webContents
    // 打开调试器
    wc.openDevTools()
    wc.on('did-finish-load', () => {
        console.log('did-finish-load');
    })
    wc.on('dom-ready', () => {
        console.log('dom-ready');
    })
    wc.on('context-menu', (e, params) => {
        // 点击右键触发
        console.log('context-menu');
        // 可以注入js代码
        // wc.executeJavaScript(`alert('${params.selectionText}')`)
        // 打开文件
        // dialog.showOpenDialog({
        //     buttonLabel: '选择',
        //     defaultPath: app.getPath('desktop'),
        //     // multiSelections->可以多选
        //     // createDirectory->可以创建文件夹
        //     // openFile->可以打开文件
        //     // openDirectory->只能打开文件夹
        //     properties: ['multiSelections', 'createDirectory', 'openFile']
        // }).then((res) => {
        //     console.log(res.filePaths);
        // })
        // 保存文件
        // dialog.showSaveDialog({

        // }).then(result => {
        //     console.log(result.filePath)
        // })
        // 显示消息提示框
        // const answers = ['Yes', 'No', 'Maybe']
        // dialog.showMessageBox({
        //     title: 'Message Box',
        //     message: '请选择一个选项',
        //     detail: '信息选项',
        //     buttons: answers
        // }).then(({ response }) => {
        //     console.log(`user selected ${answers[response]}`);
        // })
        // 弹出菜单
        contextMenu.popup()
    })
    win.on('ready-to-show', () => {
        // 当页面加载完毕再显示(防止白屏)
        win.show()
    })
    // 第二个窗口
    // const win2 = new BrowserWindow({
    //     width: 600,
    //     height: 400,
    //     // 设置父子关系(随父窗口关闭)
    //     parent: win,
    //     // 关闭子窗口才能操作父窗口
    //     modal: true,
    // })
    // win2.loadURL('https://www.google.com')
    winState.manage(win)
    createTray(app, win) // 创建托盘  
    // 设置快捷键ctrl+g
    globalShortcut.register('CommandOrControl+G', () => {
        console.log('g');
    })
    // 解除快捷键
    // globalShortcut.unregister('CommandOrControl+G')
    Menu.setApplicationMenu(mainMenu('信息提示框', (args) => {
        console.log(args);
    }))
}
app.on('window-all-closed', () => {
    console.log('window-all-closed');
    if (process.platform === 'darwin') app.quit()
})
app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
    // 得到一些路径
    console.log(app.getPath('desktop'));
    console.log(app.getPath('music'));
    console.log(app.getPath('temp'));
    console.log(app.getPath('userData'));
})
// 窗口关闭前
app.on('before-quit', () => {
    console.log('app is quit');
})
// 窗口失去焦点
app.on('browser-window-blur', () => {
    console.log('browser-window-blur');
    // 设置3秒后自动关闭
    setTimeout(() => {
        // app.quit()
    }, 3000);
})
// 窗口获取焦点
app.on('browser-window-focus', () => {
    console.log('browser-window-focus');
})
// 拿到渲染进程传递的信息,主进程才有ipcMain
ipcMain.handle('send-event', (event, msg) => {
    // 主进程的log会打印到控制台,而不是f12(ctrl+shift+i)
    console.log(msg);
    return msg;
})
// 捕获渲染进程的消息,截取屏幕
ipcMain.handle(
    'DESKTOP_CAPTURER_GET_SOURCES',
    (event, opts) => desktopCapturer.getSources(opts).then(async (sources) => {
        // for (const source of sources) { }
        console.log(sources);
        return sources;
    })
)