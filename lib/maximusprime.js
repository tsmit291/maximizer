'use babel';

import MaximusprimeView from './maximusprime-view';
import { CompositeDisposable } from 'atom';
                                                                                                                                              
export default {

  maximusprimeView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.maximusprimeView = new MaximusprimeView(state.maximusprimeViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.maximusprimeView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'maximusprime:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.maximusprimeView.destroy();
  },

  serialize() {
    return {
      maximusprimeViewState: this.maximusprimeView.serialize()
    };
  },

  toggle() {
    console.log('Maximusprime was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
