const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    let janelaPrincipal = new BrowserWindow({
        width: 800,
        height: 600
    })
    console.log("TESTE DO ELECTRON")
    janelaPrincipal.loadURL(`file://${__dirname}/app/index.html`)

});
app.allowRendererProcessReuse = true;