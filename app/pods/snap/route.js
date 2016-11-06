import Ember from 'ember';

export default Ember.Route.extend({
  // Ember ajax service.
  ajax: Ember.inject.service(),

  setupController(controller) {
    this._super(...arguments);

     this.get('ajax').request('/newsfeed')
      .then((results) => {
        controller.set('newsFeedData', results);
      });
  }
});
