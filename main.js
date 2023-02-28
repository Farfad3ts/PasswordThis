const { app, BrowserWindow, Menu, ipcMain  } = require("electron");
const path = require("path");
const { versions } = require("process");

const isMac = process.platform === 'darwin'
let mainWindow;
let aboutWindow

function createWindows() {
    mainWindow = new BrowserWindow({
        title: "PasswordThis",
        width: 800,
        height: 600,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        }
    });
    ipcMain.handle('ping', () => 'pong')
    mainWindow.loadFile(path.join(__dirname, './src/app/index.html'));
}

function createAboutWindows(){
    aboutWindow = new BrowserWindow({
        title: "About - PasswordThis",
        width: 300,
        height: 270,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        }
    });
    aboutWindow.loadFile(path.join(__dirname, './src/app/about.html'));
    aboutWindow.setMenuBarVisibility(false);

}

app.whenReady().then(() => {
    createWindows()
    const mainMenu = Menu.buildFromTemplate(menu);
    mainWindow.setMenu(mainMenu);
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

const menu = [
    ...(isMac ? [{
        label: app.name,
        submenu: [
            {
                label: "About"
            }
        ]
    }] : []),
    {
        role: "fileMenu",

    },
    ...(!isMac ? [
        {
            label: "Help",
            submenu: [
                {
                    label: "About",
                    click: createAboutWindows
                }
            ]

        }] : [])
]

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


