import Ember from 'ember';

const PERSON = 'Person';
const LOCATION = 'Location';
const DAY = 'Day';

export default Ember.Component.extend({

  /**
   * filtered person
   */
  selectedPerson: null,

  /**
   * Once we filter we assume that is enough needed and continue down
   */
  isFiltered: Ember.computed('selectedPerson', {
    get() {
      const selectedPerson = this.get('selectedPerson');
      return !!selectedPerson;
    }
  }),

  /**
   * Defaults to person if not passed
   */
  filterType: LOCATION,
  filterTypes: Ember.A([LOCATION, DAY, PERSON]),

  /**
   * Simple booleans for display on filter types
   */
  isLocationFilterType: Ember.computed('filterType', {
    get() {
      const filterType = this.get('filterType');
      return filterType === LOCATION;
    }
  }),

  isDayFilterType: Ember.computed('filterType', {
    get() {
      const filterType = this.get('filterType');
      return filterType === DAY;
    }
  }),

  isPersonFilterType: Ember.computed('filterType', {
    get() {
      const filterType = this.get('filterType');
      return filterType === PERSON;
    }
  }),

  actions: {
    selectFilterType(filterType) {
      this.set('filterType', filterType);
    },
    selectPerson: function(selectedPerson) {
      this.set('selectedPerson', selectedPerson);
    }
  }
});
