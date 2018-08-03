const vscode = require('vscode');
const data = require('./src/data');

class Provider {
  provideHover(document, position) {
    const wordRange = document.getWordRangeAtPosition(position);
    let word = wordRange ? document.getText(wordRange) : '';
    const info = data[word] || '';
    const md = new vscode.MarkdownString(info);
    return new vscode.Hover(md);
  }
}

function activate(context) {
  const ctx = vscode.languages.registerHoverProvider(
    'javascript',
    new Provider()
  );

  context.subscriptions.push(ctx);
}

exports.activate = activate;
