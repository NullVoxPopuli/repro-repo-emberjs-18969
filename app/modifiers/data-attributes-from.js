import Modifier from 'ember-modifier';

export default class DataAttributesFrom extends Modifier {
	didReceiveArguments() {
    this.element.dataset['appliedData'] = this.args.positional[0];
  }
}
