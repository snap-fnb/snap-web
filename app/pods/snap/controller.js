import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),

  actions: {
    // The uber search bar
    globalSearch(searchParam) {
      const ajax = this.get('ajax');

      const request = ajax.request('/search', {
        method: 'GET',
        data: {
          query: searchParam
        }
      });

      return request;
    }
  }
});
