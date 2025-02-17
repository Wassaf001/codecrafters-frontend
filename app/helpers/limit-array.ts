import { helper } from '@ember/component/helper';

export default helper(function limitArray([array, limit]: [any[], number]) {
  return array.reverse().slice(0, limit);
});