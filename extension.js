// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const axios = require('axios');
const data = require('./src/data');

class Provider {
    provideHover(document, position){
        const wordRange = document.getWordRangeAtPosition(position);
        let word = wordRange ? document.getText(wordRange) : '';
        const info = data[word] || '';
        const md = new vscode.MarkdownString(info)
        return new vscode.Hover(md);
    }
}


// this method is called when your extension is activated
// your extension is activated the very first time the cforommand is executed
function activate(context) {
    let activeEditor = vscode.window.activeTextEditor;
    const document = activeEditor.document;
    document.get
    

    axios.get('https://raw.githubusercontent.com/Fyrd/caniuse/master/fulldata-json/data-2.0.json')
    .then(response => {
        const keys = Object.keys(response.data.data);
        const properties = keys.map(key => response.data.data[key]);
        const string = 'margin';
        const prop = properties.filter(prop => prop.links[0].url.includes(string));

        const ctx = vscode.languages.registerHoverProvider('javascript', new Provider())

        context.subscriptions.push(ctx);

    });
}

exports.activate = activate;