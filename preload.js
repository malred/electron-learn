const { contextBridge, ipcRenderer, clipboard,nativeImage } = require('electron')
// const desktopCapturer = {
//     // 向主进程发送事件
//     getSources: (opts) => ipcRenderer.invoke('DESKTOP_CAPTURER_GET_SOURCES', opts)
// }
// 渲染进程没有ipcMain,只有ipcRenderer
const handleSend = async () => {
    let fallback = await ipcRenderer.invoke('send-event', 'hello world')
    console.log(fallback);
}
const copy = () => {
    clipboard.writeText('剪贴板')
}
const read = () => {
    const txt = clipboard.readText()
    console.log(txt);
}
const capture = async () => {
    let sources = await ipcRenderer.invoke(
        'DESKTOP_CAPTURER_GET_SOURCES', { types: ['window', 'screen'] })
    for (const source of sources) {
        // if (source.name === 'Entire Screen') 
        if (source.name === '整个屏幕') {
            console.log(source);
            let str = source.thumbnail.crop({
                x: 0, y: 30, width: 1200, height: 1170
            })
            console.log(str);
            // 生成图片url
            let imgSrc = str.toDataURL()
            console.log(imgSrc);
            return imgSrc;
        }
    }
}
const testNativeImage = () => {
    const img = nativeImage.createFromPath('1.jpeg')
    console.log(img);
}
// 在页面的window对象上挂载myapi对象
contextBridge.exposeInMainWorld('myapi', {
    // 把platform对象注入myapi  
    platform: process.platform,
    // 挂载通信方法
    handleSend,
    // 剪贴板操作方法
    copy,
    read,
    capture,
    testNativeImage
}) 