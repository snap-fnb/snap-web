import Ember from 'ember';

const { computed, isEmpty, Logger: { info }} = Ember;

export default Ember.Component.extend({
  classNames: ['search-results'],

  classNameBindings: ['isSearching:show:hide'],

  // Whether the loading <datalist>
  isLoading: true,
  
  // Whether the search is active.
  isSearching: false,

  // Whether to show the results container
  hasResults: computed('isLoading', 'results', {
    get() {
      const results = this.get('results');

      if (!isEmpty(results) && !isEmpty(results.canI) && !isEmpty(results.showMe)) {
        return true;
      }

      return false;
    }
  }),

  // The results to render.
  results: null,

  actions: {
    chooseItem(item) {
      this.get('selectResultAction')(item);
    }
  }
});
