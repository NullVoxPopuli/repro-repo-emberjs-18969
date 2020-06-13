import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SubComponent extends Component {

  get derivedData() {
    return this.args.data.nestedData.kind;
  }
}
