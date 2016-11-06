import Ember from 'ember';

const { computed, isEmpty } = Ember;

export default Ember.Component.extend({
  classNames: ['transaction-list'],

  hasTransactions: computed('transactions', {
    get() {
      const transactions = this.get('transactions');

      return !isEmpty(transactions); 
    }
  }),

  transactions: null
});
