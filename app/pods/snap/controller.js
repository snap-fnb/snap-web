import Ember from 'ember';

const { Logger: { info }} = Ember;

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),

  // Whether the news feed is visible.
  isNewsFeedVisible: false,

  // The newsfeed data
  newsFeedData: [{
    id: 1,
    category: 'payment_upcoming',
    detail: 'You have an upcoming payment that you may not meet.',
    groupName: 'Alert',
    groupKey: 'alerts',
    level: 1, // 1 red, 2, orange, 3 green
    title: 'Potential insufficient funds'
  }, {
    id: 2,
    category: 'message',
    detail: 'The current Terms and Agreement have changed.  Read more details here.',
    groupName: 'Message',
    groupKey: 'messages',
    title: 'Terms and Agreement changes'
  }, {
    id: 3,
    category: 'deposit',
    detail: 'Deposit added to your account',
    groupName: 'Notification',
    groupKey: 'notifications',
    title: 'New income added'
  }, {
    id: 4,
    category: 'payment_upcoming',
    detail: 'Upcoming rent payment',
    groupName: 'Notification',
    groupKey: 'notifications',
    title: 'Upcoming rent payment'
  }, {
    id: 5,
    category: 'payment_past',
    detail: 'A payment was made.',
    groupName: 'Notification',
    groupKey: 'notifications',
    title: 'Bill paid, awesome!'
  }],

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
    },

    // Remove item
    removeNewsItem(feedItem) {
      info('removing item: ', feedItem);
      let newsFeedData = this.get('newsFeedData');
      
      newsFeedData = newsFeedData
        .filter(feed => feed.id !== feedItem.id);
      
      if (!newsFeedData.length) {
        this.set('isNewsFeedVisible', false);
      }
      
      this.set('newsFeedData', newsFeedData);
      this.notifyPropertyChange('newsFeedData');
    }
  }
});
