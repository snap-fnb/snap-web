import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),

  // Whether the news feed is visible.
  isNewsFeedVisible: false,

  // The newsfeed data
  newsFeedData: {
    alerts: [{
      category: 'payment_upcoming',
      detail: 'You have an upcoming payment that you may not meet.',
      newsFeedGroup: 'Alert',
      level: 1, // 1 red, 2, orange, 3 green
      title: 'Potential insufficient funds'
    }],
    messages: [{
      category: 'message',
      detail: 'The current Terms and Agreement have changed.  Read more details here.',
      newsFeedGroup: 'Message',
      title: 'Terms and Agreement changes'
    }],
    notifications: [{
      category: 'deposit',
      detail: 'Deposit added to your account',
      newsFeedGroup: 'Notification',
      title: 'New income added'
    }, {
      category: 'payment_upcoming',
      detail: 'Upcoming rent payment',
      newsFeedGroup: 'Notification',
      title: 'Upcoming rent payment'
    }, {
      category: 'payment_past',
      detail: 'A payment was made.',
      newsFeedGroup: 'Notification',
      title: 'Bill paid, awesome!'
    }]
  },

  actions: {
    toggleNewsFeedAction() {
      this.toggleProperty('isNewsFeedVisible');
    },

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
