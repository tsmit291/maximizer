import 'babel-polyfill';
import chai from 'chai';
let apm = 'atom-package-manager';

// import Maximusprime from '../lib/maximusprime'
let editorView = 'atom.views.getView';

describe('#maximize pane', () => {
  it('should return key press value when key stroke is hit', () => {
    apm.keymap.onDidMatchBinding((event) => {
      if(event.keystrokes === "ctrl-alt-m-p") {
        return true
      }
    })
    expect(keyStroke).to.equal();
  })
})
