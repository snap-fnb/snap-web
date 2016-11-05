import Ember from 'ember';

const { computed, isEmpty, Logger: { info }} = Ember;

export default Ember.Component.extend({
  classNames: ['search-results'],

  classNameBindings: ['hasResults:show:hide'],

  // Whether the loading <datalist>
  isLoading: false,
  
  // Whether to show the results container
  hasResults: computed('isLoading', 'results', {
    get() {
      const results = this.get('results');
      const isLoading = this.get('isLoading');

      if (!isEmpty(results) && Object.keys(results).length ||
          isLoading) {
        return true;
      }

      return false;
    }
  }),

  // The results to render.
  results: null,

  actions: {
    chooseItem(item) {
      info('Choosing item...', item);
      this.get('selectResultAction')(item);
    }
  }
});
