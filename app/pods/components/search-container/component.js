import Ember from 'ember';

const { computed, isEmpty, Logger: { info }} = Ember;

export default Ember.Component.extend({
  classNames: ['search-container'],

  // Whether the async operations are happening
  isLoading: false,

  // Whether actively searching
  isSearching: computed('searchValue', {
    get() {
      return this.get('searchValue').length > 0;
    }
  }),

  // The value entered in the search component.
  searchValue: '',
  
  // The results from the search filter.
  results: null,

  // The search function.
  search() {
    let searchValue = this.get('searchValue');
    let searchAction = this.get('searchAction');

    searchAction(searchValue)
      .then((filterResults) => {
        this.setProperties({
          isLoading: false,
          results: filterResults
        })
      });
  },

  // The debounced search timer
  filterTimer: null,

  actions: {
    noop() {
      info('Handling submit...');
    },

    handleFilterEntry() {
      if (!isEmpty(this.get('searchValue'))) {
        this.set('isLoading', true);
        let timer = Ember.run.debounce(this, this.search, 500);
        this.set('filterTimer', timer);
      } else {
        Ember.run.cancel(this.get('filterTimer'));
        this.setProperties({
          isLoading: false,
          results: null,
          searchValue: ''
        });
      }
      
    },

    selectResult(result) {
      info(result);
      this.setProperties({
        isLoading: false,
        results: null,
        searchValue: ''
      });

      this.get('displaySectionAction')(result);
    }
  }
});
