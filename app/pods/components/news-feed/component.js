import Ember from 'ember';

const { Logger: { info } } = Ember;

export default Ember.Component.extend({
  classNames: ['news-feed'],

  actions: {
    removeItem(item) {
      this.get('removeNewsItemAction')(item);
    },

    markItemAsRead(item) {
      info('marking item as read: ', item);
    }
  }
});
