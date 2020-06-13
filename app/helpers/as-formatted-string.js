import { helper } from '@ember/component/helper';

export default helper(function asFormattedString([a]/*, hash*/) {
  return a ? JSON.stringify(a, null, 2) : `${a}`;
});
