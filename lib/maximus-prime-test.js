'use strict';

require('babel-polyfill');

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apm = 'atom-package-manager';

// import Maximusprime from '../lib/maximusprime'
var editorView = 'atom.views.getView';

describe('#maximize pane', function () {
  it('should return key press value when key stroke is hit', function () {
    apm.keymap.onDidMatchBinding(function (event) {
      if (event.keystrokes === "ctrl-alt-m-p") {
        return true;
      }
    });
    expect(keyStroke).to.equal();
  });
});