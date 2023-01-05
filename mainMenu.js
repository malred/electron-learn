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