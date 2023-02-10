import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

const customSortingCriteriaArray = [
  'critical',
  'warning',
  'success',
  'highlight',
  'neutral',
];

export default class ComponentsTableController extends Controller {
  @tracked customSortOrderForBadges;

  get customSortingMethodForBadges() {
    return (a, b) => {
      const aIndex = customSortingCriteriaArray.indexOf(a['color']);
      const bIndex = customSortingCriteriaArray.indexOf(b['color']);
      if (aIndex < bIndex) {
        return this.customSortOrderForBadges === 'asc' ? -1 : 1;
      } else if (aIndex > bIndex) {
        return this.customSortOrderForBadges === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    };
  }
}
