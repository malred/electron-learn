![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672824436864-b7000a6e-b3bc-41f1-9f58-6298f185b5e0.png#averageHue=%23a3978f&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=295&id=u43d50cff&margin=%5Bobject%20Object%5D&name=image.png&originHeight=369&originWidth=1152&originalType=binary&ratio=1&rotation=0&showTitle=false&size=198416&status=done&style=none&taskId=u3a8d100c-dfee-4af3-b2e0-5c1ee8f8349&title=&width=921.6)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672824445855-83c99774-01b7-4e9f-b311-3e4798e86b81.png#averageHue=%239edfdd&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=274&id=u5cc69764&margin=%5Bobject%20Object%5D&name=image.png&originHeight=343&originWidth=979&originalType=binary&ratio=1&rotation=0&showTitle=false&size=156898&status=done&style=none&taskId=ua8b5e27d-2f7f-4df0-864f-846ff60e1f0&title=&width=783.2)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672824501456-9aa73f3b-8ee8-4171-9d47-e29476cc1c6b.png#averageHue=%23fafaf8&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=441&id=udf425bfe&margin=%5Bobject%20Object%5D&name=image.png&originHeight=551&originWidth=754&originalType=binary&ratio=1&rotation=0&showTitle=false&size=212951&status=done&style=none&taskId=u257fb3c7-0bc9-44f9-a8be-abae1715e03&title=&width=603.2)
# 第一个electron程序
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672826493250-14b3eab8-839e-4d46-89da-4eb7c0a33fac.png#averageHue=%23eef3f3&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=310&id=bqXnb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=388&originWidth=994&originalType=binary&ratio=1&rotation=0&showTitle=false&size=137602&status=done&style=none&taskId=uee88aa38-9997-464f-a835-33ece9df8d6&title=&width=795.2)
```javascript
npm init -y
# 用cnpm成功率高
npm i electron -D
cnpm i electron -D
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672827031490-a6a7c70f-5530-4a27-9136-eb21ea6cc3ea.png#averageHue=%23232120&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=259&id=u4e466568&margin=%5Bobject%20Object%5D&name=image.png&originHeight=324&originWidth=479&originalType=binary&ratio=1&rotation=0&showTitle=false&size=26586&status=done&style=none&taskId=ubc2be75f-8649-4a24-8b47-a54560a53a5&title=&width=383.2)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672826573789-29456098-83bd-4e5c-8c7d-5c086653aeb3.png#averageHue=%2329292c&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=138&id=ufeaf4cf8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=173&originWidth=292&originalType=binary&ratio=1&rotation=0&showTitle=false&size=7169&status=done&style=none&taskId=u5a359abf-37d0-49d2-8eb3-1f0f37d06b7&title=&width=233.6)
```javascript
const { app, BrowserWindow } = require('electron')
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800
    })
    // 可以把做好的h5应用嵌入
    // win.loadURL('https://github.com')
    // win.loadURL('http://124.71.223.30:2233')
    // 加载本地文件
    win.loadFile('index.html')
}
app.whenReady().then(createWindow)
```
# 主进程和渲染进程
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672827129079-f77e5882-4b78-4d4a-bb3d-c5e6d016df8e.png#averageHue=%23fdfdfa&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=543&id=ua56c5f09&margin=%5Bobject%20Object%5D&name=image.png&originHeight=679&originWidth=759&originalType=binary&ratio=1&rotation=0&showTitle=false&size=231523&status=done&style=none&taskId=u78050fb1-432c-474e-94bd-097785c08cb&title=&width=607.2)
## 安全警告
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672828080149-3b206170-eef8-47fa-aabd-24bbabc541a1.png#averageHue=%23f7f3dd&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=166&id=ueda6b22d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=208&originWidth=669&originalType=binary&ratio=1&rotation=0&showTitle=false&size=18444&status=done&style=none&taskId=u546ddf8a-3b40-4dcb-8e1e-01cd9ebfc49&title=&width=535.2)
### 解决方法: 1,关闭警告
```javascript
process.env['ELECTRONO_DISABLE_SECURITY_WARNINGS'] = 'true'
```
### 解决方法: 2,配置CSP
```javascript
 <!-- 配置csp,self是本地的意思 -->
 <meta http-equiv="Content-Security-Policy" content="default-src 'self';img-src 'self' data:; script-src 'self';style-src 'self' 'unsafe-inline'">
```
## 渲染进程使用node模块,关闭进程隔离,创建文件(不安全)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672829308512-e0a5384b-5297-44e3-8d00-1d1f51f06a22.png#averageHue=%231f1e1e&clientId=u681c4027-ab90-4&crop=0.0864&crop=0&crop=0.8704&crop=1&from=paste&height=192&id=u9709111d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=307&originWidth=608&originalType=binary&ratio=1&rotation=0&showTitle=false&size=28547&status=done&style=none&taskId=uad12d169-af3d-404f-ad26-23035420bb3&title=&width=381)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672829339244-3aa78c9d-2802-4a0d-8c4c-c9c3d109eedd.png#averageHue=%23222a30&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=183&id=uf681d732&margin=%5Bobject%20Object%5D&name=image.png&originHeight=229&originWidth=289&originalType=binary&ratio=1&rotation=0&showTitle=false&size=8535&status=done&style=none&taskId=u36126e5b-7c2b-4c23-8322-3413167f72d&title=&width=231.2)
```javascript
const fs = require('fs');
fs.writeFile('C:\\Users\\13695\\Desktop\\example.txt', 'abc', () => {
    console.log('done');
})
```
## 主进程生命周期
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672829616536-9439f658-fcbf-4f8a-b508-785567e49fc6.png#averageHue=%23e7dcd1&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=373&id=ud2436eb2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=466&originWidth=702&originalType=binary&ratio=1&rotation=0&showTitle=false&size=146479&status=done&style=none&taskId=u6522d1dc-3f46-4622-90e4-5aa06e17274&title=&width=561.6)
```javascript
const { app, BrowserWindow } = require('electron')
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            // 使用node
            // nodeIntegration: true,
            // 关闭进程隔离
            // contextIsolation: false,
        }
    })
    // 可以把做好的h5应用嵌入
    // win.loadURL('https://github.com')
    // win.loadURL('http://124.71.223.30:2233')
    // 加载本地文件
    win.loadFile('index.html')
    // 打开调试器
    win.webContents.openDevTools()
    // 关闭安全警告
    // process.env['ELECTRONO_DISABLE_SECURITY_WARNINGS'] = 'true'
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
}) 
```
## preload(需要打开node或关闭沙盒才能用模块)
### 如果preload出bug,会报错无法加载preload.js
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672830629769-c9ffbb1b-86df-46ce-b4eb-25bfdce1c87f.png#averageHue=%23232220&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=207&id=u20ebb808&margin=%5Bobject%20Object%5D&name=image.png&originHeight=259&originWidth=983&originalType=binary&ratio=1&rotation=0&showTitle=false&size=32480&status=done&style=none&taskId=u859b51f8-8119-4e7c-b2c4-b137ca8a9f9&title=&width=786.4)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672832038863-2812419d-ae16-49f2-8481-d7989c9062ec.png#averageHue=%231f1e1e&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=326&id=ua073dabb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=407&originWidth=852&originalType=binary&ratio=1&rotation=0&showTitle=false&size=85391&status=done&style=none&taskId=u142ab337-8f28-4a78-8649-773e68321b4&title=&width=681.6)
### preload挂载对象到window
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672832241561-ba803a0f-1849-41d5-ae0c-b87cddbcd303.png#averageHue=%23242322&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=133&id=u3661c237&margin=%5Bobject%20Object%5D&name=image.png&originHeight=166&originWidth=461&originalType=binary&ratio=1&rotation=0&showTitle=false&size=11432&status=done&style=none&taskId=udb55d7f6-3c68-47e3-a383-5d7fb49765b&title=&width=368.8)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672832263307-73f45b3d-dc5e-4746-a8c5-12ac7e8fb16f.png#averageHue=%23252422&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=221&id=ua7888693&margin=%5Bobject%20Object%5D&name=image.png&originHeight=276&originWidth=701&originalType=binary&ratio=1&rotation=0&showTitle=false&size=43603&status=done&style=none&taskId=ua0aca075-40ae-44c5-ad41-8bf42eecc9b&title=&width=560.8) ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672832275270-297fbbe6-8b96-418e-aa89-89d985fabfcb.png#averageHue=%23e9edf3&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=184&id=u65924840&margin=%5Bobject%20Object%5D&name=image.png&originHeight=173&originWidth=310&originalType=binary&ratio=1&rotation=0&showTitle=false&size=8093&status=done&style=none&taskId=uc7f8df39-49b3-4d6b-9be0-d6106b75cbe&title=&width=329)
## 主进程与渲染进程通信
### proload.js(挂载发送信息的函数到window对象)
```javascript
const { contextBridge, ipcRenderer } = require('electron')
// 渲染进程没有ipcMain,只有ipcRenderer
const handleSend =async () => {
    let fallback = await ipcRenderer.invoke('send-event', 'hello world')
    console.log(fallback);
}
// 在页面的window对象上挂载myapi对象
contextBridge.exposeInMainWorld('myapi', {
    // 把platform对象注入myapi  
    platform: process.platform,
    // 挂载通信方法
    handleSend
}) 
```
### main.js(定义接收信息的函数)
```javascript
const { app, BrowserWindow, ipcMain } = require('electron')
......
// 拿到渲染进程传递的信息,主进程才有ipcMain
ipcMain.handle('send-event', (event, msg) => {
    // 主进程的log会打印到控制台,而不是f12(ctrl+shift+i)
    console.log(msg);
    return msg;
})
```
### index.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 配置csp,self是本地的意思 -->
    <meta http-equiv="Content-Security-Policy"
        content="default-src 'self';img-src 'self' data:; script-src 'self';style-src 'self' 'unsafe-inline'">
    </meta>
    <title>Document</title>
</head>

<body>
    hello
    <button id="btn">按钮</button>
    <script src="./render/app.js"></script>
</body>

</html>
```
### app.js(页面按钮绑定事件触发window上挂载的发送信息函数)
```javascript
document.querySelector('#btn')
    .addEventListener('click', function () {
        window.myapi.handleSend()
    })
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672834143174-63ef787c-cdd6-4c77-9727-1b78fd5bf4c1.png#averageHue=%23d8e3f2&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=168&id=u8086353a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=210&originWidth=312&originalType=binary&ratio=1&rotation=0&showTitle=false&size=11676&status=done&style=none&taskId=uf4caa7c5-d932-4795-be61-f1238b5b2ec&title=&width=249.6)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672834150494-fb83e1aa-f6a6-4cc5-900f-5f94d3da46da.png#averageHue=%23242322&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=75&id=ub802e5a3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=94&originWidth=311&originalType=binary&ratio=1&rotation=0&showTitle=false&size=4232&status=done&style=none&taskId=u263a6b38-7ada-4d0a-9468-fd37720c56e&title=&width=248.8)
# App+BrowserWindow
## 事件
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672836140622-878b61a9-70be-4ed5-ad91-2f8bf8b66492.png#averageHue=%23fafaf8&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=467&id=u12adec2b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=584&originWidth=600&originalType=binary&ratio=1&rotation=0&showTitle=false&size=131826&status=done&style=none&taskId=u21d865b8-4776-4039-9b93-ec44b2e584a&title=&width=480)
```javascript
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: { 
            sandbox: false, 
            // 预加载(请求index.html前执行),必须是绝对路径
            preload: path.join(__dirname, 'preload.js')// 运行在渲染进程
        }
    }) 
    // 加载本地文件
    win.loadFile('index.html')
    // 打开调试器
    win.webContents.openDevTools() 
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
        app.quit()
    }, 3000);
})
// 窗口获取焦点
app.on('browser-window-focus', () => {
    console.log('browser-window-focus');
}) 
```
## browserWindow
### 优雅地显示窗口
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672836560574-cc52ee4c-d934-4efa-96a1-455672001942.png#averageHue=%23f7f6f4&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=287&id=uddf02a87&margin=%5Bobject%20Object%5D&name=image.png&originHeight=359&originWidth=554&originalType=binary&ratio=1&rotation=0&showTitle=false&size=105660&status=done&style=none&taskId=ud6999bd5-cad2-43ef-be93-545c723f25f&title=&width=443.2)
```javascript
const { app, BrowserWindow, ipcMain } = require('electron') 
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        backgroundColor: '#2e2c29',  
     	  show: false, 
    }) 
    win.on('ready-to-show', () => {
        // 当页面加载完毕再显示(防止白屏)
        win.show()
    })
} 
```
### 多个窗口
```javascript
const { app, BrowserWindow, ipcMain } = require('electron') 
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800, 
        show: false, 
    }) 
    // 加载本地文件
    win.loadFile('index.html') 
    win.on('ready-to-show', () => {
        // 当页面加载完毕再显示(防止白屏)
        win.show()
    })
    // 第二个窗口
    const win2 = new BrowserWindow({
        width: 600,
        height: 400,
        // 设置父子关系(随父窗口关闭)
        parent: win,
        // 关闭子窗口才能操作父窗口
        modal: true,
    })
    win2.loadURL('https://www.google.com')
} 
```
### 无边框窗口
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672838216699-a088b6c3-a988-4b6f-b0e3-a23c451293a7.png#averageHue=%23f0f8f2&clientId=ue14f9db1-5285-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=335&id=RPkna&margin=%5Bobject%20Object%5D&name=image.png&originHeight=419&originWidth=722&originalType=binary&ratio=1&rotation=0&showTitle=false&size=126568&status=done&style=none&taskId=udb08b721-bba5-4870-bd3c-b717c15082a&title=&width=577.6)
```javascript
const win = new BrowserWindow({
        width: 1000,
        height: 800,
        // 不显示顶部内容
        frame: false,
        backgroundColor: '#2e2c29', 
        show: false, 
    })
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672837810994-0a2af389-4dd8-426a-9289-fa7c312c7736.png#averageHue=%232e2c29&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=226&id=u7cb9a435&margin=%5Bobject%20Object%5D&name=image.png&originHeight=282&originWidth=793&originalType=binary&ratio=1&rotation=0&showTitle=false&size=16656&status=done&style=none&taskId=u3318eecc-0cc0-4d05-b188-d9ab3388a9f&title=&width=634.4)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672837985120-b0a38742-94d2-43fc-823c-de08ff70f14e.png#averageHue=%232a282a&clientId=u681c4027-ab90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=77&id=u8cab1022&margin=%5Bobject%20Object%5D&name=image.png&originHeight=87&originWidth=832&originalType=binary&ratio=1&rotation=0&showTitle=false&size=40814&status=done&style=none&taskId=ua4cab431-e1dc-431b-8ba0-7ba9849c142&title=&width=736.6000366210938)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672838462038-1a43a132-984a-43a1-97b9-ab0ada3188be.png#averageHue=%23212020&clientId=ue14f9db1-5285-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=380&id=u1c32371f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=475&originWidth=557&originalType=binary&ratio=1&rotation=0&showTitle=false&size=34956&status=done&style=none&taskId=u37890ebe-eefb-4dd9-ae11-c89995acb2e&title=&width=445.6)
## 属性和方法
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672838440778-682b4a96-e875-435d-a6ca-ba223ae50ae0.png#averageHue=%23f7f7f7&clientId=ue14f9db1-5285-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=713&id=u88d3a44d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=891&originWidth=735&originalType=binary&ratio=1&rotation=0&showTitle=false&size=257841&status=done&style=none&taskId=ue8d4896f-b7b3-4e1d-98e6-efaaf7f27ba&title=&width=588)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672838520228-6cc1069b-a77d-416c-ad6a-d008d980ab54.png#averageHue=%23f8f9f6&clientId=ue14f9db1-5285-4&crop=0&crop=0&crop=1&crop=0.311&from=paste&height=325&id=u6188f6a1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=406&originWidth=753&originalType=binary&ratio=1&rotation=0&showTitle=false&size=152508&status=done&style=none&taskId=u0f47256d-91be-4a28-897e-7d498e2f62c&title=&width=603)
### state
```javascript
# cnpm成功率更高
npm i electron-win-state -S
```
```javascript
const { app, BrowserWindow, ipcMain } = require('electron') 
const WinState = require('electron-win-state').default
const winState = new WinState({
    defaultWidth: 800,
    defaultHeight: 600,
})
const createWindow = () => {
    const win = new BrowserWindow({
        // 使用这个,可以从上一次的窗口大小和位置打开 
        ...winState.winOptions, // 后面如果设置了窗口大小和位置,会覆盖winState
    })  
    winState.manage(win)
} 
```
### webcontent
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672838520228-6cc1069b-a77d-416c-ad6a-d008d980ab54.png#averageHue=%23f8f9f6&clientId=ue14f9db1-5285-4&crop=0&crop=0.3044&crop=1&crop=1&from=paste&height=355&id=S7fWC&margin=%5Bobject%20Object%5D&name=image.png&originHeight=406&originWidth=753&originalType=binary&ratio=1&rotation=0&showTitle=false&size=152508&status=done&style=none&taskId=u0f47256d-91be-4a28-897e-7d498e2f62c&title=&width=658) 
```javascript
    // 打开调试器
    wc.openDevTools()
    wc.on('did-finish-load', () => {
        console.log('did-finish-load');
    })
    wc.on('dom-ready', () => {
        console.log('dom-ready');
    }) 
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672872084612-1516354e-b5b6-4e90-959a-e0d6dda6ed82.png#averageHue=%23f6f5f2&clientId=u217a3e10-326e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=201&id=u9407ffbf&margin=%5Bobject%20Object%5D&name=image.png&originHeight=251&originWidth=710&originalType=binary&ratio=1&rotation=0&showTitle=false&size=69321&status=done&style=none&taskId=u461a2f24-00e0-4b6b-8b5f-16d45cc2645&title=&width=568)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672872105600-69729524-0613-4f4f-a85b-0de74d4c693b.png#averageHue=%23f7f5f5&clientId=u217a3e10-326e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=285&id=u21605ce7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=356&originWidth=697&originalType=binary&ratio=1&rotation=0&showTitle=false&size=128674&status=done&style=none&taskId=ua2d39d6b-87f4-41d8-a3f9-b491ff6dee0&title=&width=557.6) 
```javascript
const { app, BrowserWindow, ipcMain } = require('electron') 
const createWindow = () => {
    const win = new BrowserWindow({ 
        show: false,  
    }) 
    // 加载本地文件
    win.loadFile('index.html') 
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
    wc.on('context-menu', (e,params) => {
        // 点击右键触发
        console.log('context-menu');
        // 可以注入js代码
        wc.executeJavaScript(`alert('${params.selectionText}')`)
    })  
} 
```
# dialog
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672872619635-fe1cb596-3236-4476-bf98-0b8d91c6d924.png#averageHue=%23f5f5f5&clientId=u217a3e10-326e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=470&id=u8fd7aadb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=587&originWidth=777&originalType=binary&ratio=1&rotation=0&showTitle=false&size=206532&status=done&style=none&taskId=u51f959bf-10c4-4831-8814-79d919ce163&title=&width=621.6)
```javascript
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
        const answers = ['Yes', 'No', 'Maybe']
        dialog.showMessageBox({
            title: 'Message Box',
            message: '请选择一个选项',
            detail: '信息选项',
            buttons: answers
        }).then(({ response }) => {
            console.log(`user selected ${answers[response]}`);
        })
    })
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672873633134-cc96cb3f-4d2d-430f-8e6b-8ead6d5064a2.png#averageHue=%23f8f7f7&clientId=u217a3e10-326e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=195&id=u4a51e229&margin=%5Bobject%20Object%5D&name=image.png&originHeight=244&originWidth=457&originalType=binary&ratio=1&rotation=0&showTitle=false&size=8963&status=done&style=none&taskId=uf758b938-b59c-402b-9066-4a79aaa5016&title=&width=365.6)
# 快捷键
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672874066631-4f2d006a-1795-4d07-bee1-8137f90a794a.png#averageHue=%23faf9f7&clientId=u217a3e10-326e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=458&id=u36a6d7d0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=573&originWidth=785&originalType=binary&ratio=1&rotation=0&showTitle=false&size=241382&status=done&style=none&taskId=u2ebb1719-9855-4123-9547-7b5cebc7e25&title=&width=628)
```javascript
const { log } = require('console')
const { app, BrowserWindow, ipcMain, dialog,globalShortcut } = require('electron') 
const createWindow = () => {
    const win = new BrowserWindow({
        // 使用这个,可以从上一次的窗口大小和位置打开 
        ...winState.winOptions,  
    }) 
    // 加载本地文件
    win.loadFile('index.html') 
    // 设置快捷键ctrl+g
    globalShortcut.register('CommandOrControl+G', () => {
        console.log('g'); 
    })
    // 解除快捷键
    globalShortcut.unregister('CommandOrControl+G')
} 
```
# menu
## 在main文件里写
```javascript
const { app, BrowserWindow, ipcMain, dialog, globalShortcut, Menu } = require('electron')
const WinState = require('electron-win-state').default
const winState = new WinState({
    defaultWidth: 800,
    defaultHeight: 600,
})
const mainMenu = Menu.buildFromTemplate([
    {
        label: 'electron',
        submenu: [
            {
                label: 'submenu-1',
            },
            {
                label: 'submenu-2',
            }
        ]
    },
    {
        // role --> electron提供的菜单
        label: 'edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { role: 'copy' },
            { role: 'paste' },
        ]
    },
    {
        label: 'action',
        submenu: [
            {
                // 弹出调试窗
                label: 'DevTools',
                role: 'toggleDevTools'
            },
            {
                // 全屏
                role: 'togglefullscreen'
            }
        ]
    },
    {
        label: 'greet',
        // 点击事件
        click: () => {
            dialog.showOpenDialog({
                buttonLabel: '选择',
                defaultPath: app.getPath('desktop'),
                // multiSelections->可以多选
                // createDirectory->可以创建文件夹
                // openFile->可以打开文件
                // openDirectory->只能打开文件夹
                properties: ['multiSelections', 'createDirectory', 'openFile']
            }).then((res) => {
                console.log(res.filePaths);
            })
        },
        // 设置快捷键
        accelerator: 'Shift+Alt+G',
    }
])
const createWindow = () => {
    const win = new BrowserWindow({
        // 使用这个,可以从上一次的窗口大小和位置打开 
        ...winState.winOptions, 
    }) 
    win.loadFile('index.html') 
    win.on('ready-to-show', () => {
        // 当页面加载完毕再显示(防止白屏)
        win.show()
    }) 
    winState.manage(win) 
} 
```
## 在mainMenu.js里写
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672878392005-0c0d930d-04e1-438e-afd0-7b6f23cd46fb.png#averageHue=%23292622&clientId=u217a3e10-326e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=30&id=uf5f0b751&margin=%5Bobject%20Object%5D&name=image.png&originHeight=37&originWidth=492&originalType=binary&ratio=1&rotation=0&showTitle=false&size=6586&status=done&style=none&taskId=uf57225c9-b206-4762-9697-6deb84041f6&title=&width=393.6)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672878506479-aaa4f87e-0eb7-452b-9182-fcec13466af0.png#averageHue=%2321201f&clientId=u217a3e10-326e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=83&id=u669c93d0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=104&originWidth=827&originalType=binary&ratio=1&rotation=0&showTitle=false&size=18843&status=done&style=none&taskId=u123f8775-cc00-4d44-a1e7-245e35e3f77&title=&width=661.6)
```javascript
const { app, dialog, Menu } = require('electron')
const mainMenu = (args,callback) => {
    return Menu.buildFromTemplate([
        {
            label: 'electron',
            submenu: [
                {
                    label: 'submenu-1',
                },
                {
                    label: 'submenu-2',
                }
            ]
        },
        {
            // role --> electron提供的菜单
            label: 'edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { role: 'copy' },
                { role: 'paste' },
            ]
        },
        {
            label: 'action',
            submenu: [
                {
                    // 弹出调试窗
                    label: 'DevTools',
                    role: 'toggleDevTools'
                },
                {
                    // 全屏
                    role: 'togglefullscreen'
                }
            ]
        },
        {
            label: 'greet',
            // 点击事件
            click: () => {
                // 显示消息提示框
                // const answers = ['Yes', 'No', 'Maybe']
                // dialog.showMessageBox({
                //     title: args,
                //     message: '请选择一个选项',
                //     detail: '信息选项',
                //     buttons: answers
                // }).then(({ response }) => {
                //     console.log(`user selected ${answers[response]}`);
                // })
                callback('hello world')
            },
            // 设置快捷键
            accelerator: 'Shift+Alt+G',
        }
    ])
}
module.exports = mainMenu
```
## 上下文菜单contextMenu
```javascript
const { app, BrowserWindow, ipcMain, dialog, globalShortcut, Menu } = require('electron')
let contextMenu = Menu.buildFromTemplate([
    { label: 'item 1' },
    { role: 'editMenu' }
])
const createWindow = () => { 
    win.loadFile('index.html') 
    wc.on('context-menu', (e, params) => {
        // 点击右键触发 
        // 弹出菜单
        contextMenu.popup()
    }) 
} 
```
# 托盘
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672879022574-382f7886-d8cb-4acc-b502-918c81eff3b9.png#averageHue=%23f8f8f7&clientId=u217a3e10-326e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=91&id=ub3db5f3b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=47&originWidth=160&originalType=binary&ratio=1&rotation=0&showTitle=true&size=5856&status=done&style=none&taskId=u2d9e0a19-25cd-4514-b1b5-f5f052c5e0d&title=%E9%80%BB%E8%BE%91%E5%83%8F%E7%B4%A0%E6%AF%94&width=309 "逻辑像素比")![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672879060682-70c225c7-edee-4886-ba63-d599a2603817.png#averageHue=%23f5f5f5&clientId=u217a3e10-326e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=502&id=ua34e3597&margin=%5Bobject%20Object%5D&name=image.png&originHeight=628&originWidth=813&originalType=binary&ratio=1&rotation=0&showTitle=false&size=179836&status=done&style=none&taskId=u83b6483b-3376-4a1f-ab52-8b71075ea20&title=&width=650.4)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672879195067-6424f9ff-396b-4df6-8659-51510d52e701.png#averageHue=%23e8c694&clientId=u217a3e10-326e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=145&id=u679cfb69&margin=%5Bobject%20Object%5D&name=image.png&originHeight=77&originWidth=107&originalType=binary&ratio=1&rotation=0&showTitle=false&size=5521&status=done&style=none&taskId=ucfccf7d8-0bc9-4001-b968-01c72e921fa&title=&width=201.5999984741211)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672879238943-e4fe97db-553e-48fd-b9a4-001cc4ab3be0.png#averageHue=%239ed6c5&clientId=u217a3e10-326e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=108&id=u85671cba&margin=%5Bobject%20Object%5D&name=image.png&originHeight=92&originWidth=154&originalType=binary&ratio=1&rotation=0&showTitle=false&size=4208&status=done&style=none&taskId=u989c4acd-c492-49ff-bd5e-fbf8a3862eb&title=&width=181.20000457763672)
## mainTray.js
```javascript
const { Tray, Menu } = require('electron')
function createTray(app, win) {
    const tray = new Tray('1.png')
    tray.setToolTip('我的应用')
    tray.on('click', (e) => {
        // 按了shift键+click
        if (e.shiftKey) {
            // 关闭
            app.quit()
        } else {
            // 切换窗口显示隐藏
            win.isVisible() ? win.hide() : win.show()
        }
    })
    tray.setContextMenu(Menu.buildFromTemplate([
        {
            label: '显示', click: () => {
                win.show()
            }
        },
        {
            label: '退出', click: () => {
                app.quit()
            },
        }
    ]))
}
module.exports = createTray
```
## main.js
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672880003911-ec121cc3-c978-40de-b480-2d2f38d6b018.png#averageHue=%23242220&clientId=u217a3e10-326e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=35&id=u9fdc6a50&margin=%5Bobject%20Object%5D&name=image.png&originHeight=44&originWidth=548&originalType=binary&ratio=1&rotation=0&showTitle=false&size=6144&status=done&style=none&taskId=u674461fe-8e2c-4de5-8faa-2d36e9d5a71&title=&width=438.4)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672880012150-bcd141d6-c202-4a70-901c-22a93ea52a44.png#averageHue=%23232220&clientId=u217a3e10-326e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=41&id=ucb0e146d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=51&originWidth=469&originalType=binary&ratio=1&rotation=0&showTitle=false&size=9712&status=done&style=none&taskId=u00afbaae-adda-4242-a71b-0bf32882193&title=&width=375.2)
# 剪贴板
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672880034518-81dddfaf-130d-400f-8a50-9a9210a04455.png#averageHue=%23f1e4d8&clientId=u217a3e10-326e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=392&id=ufbbe6c72&margin=%5Bobject%20Object%5D&name=image.png&originHeight=490&originWidth=784&originalType=binary&ratio=1&rotation=0&showTitle=false&size=137619&status=done&style=none&taskId=uc31f82b2-212d-46b3-8953-8b2fad815cf&title=&width=627.2)
## index.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 配置csp,self是本地的意思,*是所有源的意思 -->
    <meta http-equiv="Content-Security-Policy"
        content="default-src 'self';img-src * data:; script-src 'self';style-src 'self' 'unsafe-inline'">
    </meta>
    <link rel="stylesheet" href="./app.css">
    <title>Document</title>
</head>

<body>  
    <button id="btn1">copy</button>
    <button id="btn2">read</button> 
    <script src="./render/app.js"></script>
</body>

</html>
```
## app.js
```javascript
document.querySelector('#btn1')
    .addEventListener('click', function () {
      	// 可以省略window
        myapi.copy()
    })
document.querySelector('#btn2')
    .addEventListener('click', function () {
        window.myapi.read()
    })
```
## preload.js
```javascript
const { contextBridge, ipcRenderer,clipboard } = require('electron') 
const copy = () => {
    clipboard.writeText('剪贴板')
}
const read = () => {
    const txt = clipboard.readText()
    console.log(txt);
}
// 在页面的window对象上挂载myapi对象
contextBridge.exposeInMainWorld('myapi', {
    // 把platform对象注入myapi  
    platform: process.platform, 
    // 剪贴板操作方法
    copy,
    read
}) 
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672880821683-bab73471-2401-4617-8853-9051fa48002f.png#averageHue=%23e5ede7&clientId=u217a3e10-326e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=102&id=u681b1136&margin=%5Bobject%20Object%5D&name=image.png&originHeight=127&originWidth=738&originalType=binary&ratio=1&rotation=0&showTitle=false&size=36019&status=done&style=none&taskId=u9fe3efa3-90e7-4ccd-947c-92b42a8fcd9&title=&width=590.4)
# 捕获桌面(electron22版本不能在渲染进程使用,只能渲染进程发送通信,主进程捕获并处理)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672880828389-c703786e-fbe8-45e7-8557-94e538e6234f.png#averageHue=%23ebf2ed&clientId=u217a3e10-326e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=137&id=ub1db23cb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=158&originWidth=731&originalType=binary&ratio=1&rotation=0&showTitle=false&size=64842&status=done&style=none&taskId=ua54af61e-dded-455e-b91e-475f2e8e45f&title=&width=632.7999877929688)
## app.js
```javascript
document.querySelector('#btn3')
    .addEventListener('click', async () => {
        let result = await window.myapi.capture()
        document.getElementById('img1').src = result
    })
```
## index.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 配置csp,self是本地的意思,*是所有源的意思 -->
    <meta http-equiv="Content-Security-Policy"
        content="default-src 'self';img-src * data:; script-src 'self';style-src 'self' 'unsafe-inline'">
    </meta>
    <link rel="stylesheet" href="./app.css">
    <title>Document</title>
</head>

<body> 
    <button id="btn3">抓取页面</button>
    <img src="" alt="" id="img1"> 
    <script src="./render/app.js"></script>
</body>

</html>
```
## main.js
```javascript
// 捕获渲染进程的消息,截取屏幕
ipcMain.handle(
    'DESKTOP_CAPTURER_GET_SOURCES',
    (event, opts) => desktopCapturer.getSources(opts).then(async (sources) => {
        // for (const source of sources) { }
        console.log(sources);
        return sources;
    })
)
```
## preload.js
```javascript
const { contextBridge, ipcRenderer, clipboard } = require('electron')
// const desktopCapturer = {
//     // 向主进程发送事件
//     getSources: (opts) => ipcRenderer.invoke('DESKTOP_CAPTURER_GET_SOURCES', opts)
// } 
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
// 在页面的window对象上挂载myapi对象
contextBridge.exposeInMainWorld('myapi', { 
    capture
}) 
```
# nativeImage
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672887716062-e4b24f68-a661-4bad-a6d3-27d7e50a5244.png#averageHue=%23f3f4f0&clientId=u217a3e10-326e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=370&id=u198ca228&margin=%5Bobject%20Object%5D&name=image.png&originHeight=462&originWidth=751&originalType=binary&ratio=1&rotation=0&showTitle=false&size=216578&status=done&style=none&taskId=ue05905a9-7638-486c-818e-32868d73e91&title=&width=600.8)![image.png](https://cdn.nlark.com/yuque/0/2023/png/26091703/1672887735307-00e75a38-8fc4-4b0a-99f1-71958badaad8.png#averageHue=%23eecdb4&clientId=u217a3e10-326e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=536&id=u4bf17cb0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=670&originWidth=812&originalType=binary&ratio=1&rotation=0&showTitle=false&size=258062&status=done&style=none&taskId=ub9a0aaf6-7ecd-4ed7-91ab-0fdeab95eb1&title=&width=649.6)
## preload.js
```javascript
const { contextBridge, ipcRenderer nativeImage } = require('electron')
const testNativeImage = () => {
    const img = nativeImage.createFromPath('1.jpeg')
    console.log(img);
}
// 在页面的window对象上挂载myapi对象
contextBridge.exposeInMainWorld('myapi', { 
    testNativeImage
}) 
```
## app.js
```javascript
document.querySelector('#btn4')
    .addEventListener('click',() => {
        window.myapi.testNativeImage()
    })
```
