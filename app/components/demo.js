import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

class Data {
  @tracked kind;
  @tracked nestedData;

  constructor(kind, nestedData) {
    this.kind = kind;
    this.nestedData = nestedData;
  }

  toJSON() {
    let { kind, nestedData } = this;
    return { kind, nestedData };
  }
}

export default class DemoRoot extends Component {
  @tracked data;

  @action
  makeTrue() {
    this.data = new Data('foo', new Data('baz'));
  }

  @action
  makeFalse() {
    this.data = new Data('bar');
  }
}
