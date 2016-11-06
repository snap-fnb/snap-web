import Ember from 'ember';

const { isEmpty } = Ember;

export default Ember.Controller.extend({
  // Ember ajax service.
  ajax: Ember.inject.service(),

  // The currently displayed component.  This is the result of choosing a search
  // suggestion or one of the action items.
  activeSnapComponent: '',

  // The data to pass to the currently active snap component.
  activeSnapComponentTransientData: null,

  // Whether any data is currently being fetched.
  isTransientDataLoading: false,

  // Newsfeed data
  newsFeedData: null,

  actions: {
    // Chooses the component to display and sets its data.
    displaySnapComponent(chosenItem) {
      const ajax = this.get('ajax');
      let request;

      this.set('activeSnapComponent', chosenItem.componentName);

      switch (chosenItem.type) {
        case 'transaction':
          request = ajax.request('/transactions', {
            method: 'GET',
            data: {
              query: chosenItem.codeName,
              amount: chosenItem.amount
            }
          });
          break;

        default:
          break;
      }

      if (request) {
        request.then(results => {
          if (this.get('activeSnapComponent') === chosenItem.componentName) {
            if (!isEmpty(results)) {
              this.set('activeSnapComponentTransientData', results);
            } else {
              this.set('activeSnapComponentTransientData', chosenItem);
            }
          }
        });
      }
    },

    // Toggles the news feed component
    toggleNewsFeed() {
      if (this.get('activeSnapComponent') !== 'news-feed') {
        this.set('activeSnapComponent', 'news-feed');
      } else {
        this.set('activeSnapComponent', '');
      }
    },

    // Toggles the news feed component
    toggleHelp() {
      if (this.get('activeSnapComponent') !== 'snap-help') {
        this.set('activeSnapComponent', 'snap-help');
      } else {
        this.set('activeSnapComponent', '');
      }
    },

    // Toggles the news feed component
    toggleChat() {
      if (this.get('activeSnapComponent') !== 'snap-chat') {
        this.set('activeSnapComponent', 'snap-chat');
      } else {
        this.set('activeSnapComponent', '');
      }
    },

    // Toggles the my snap component
    toggleMySnap() {
      if (this.get('activeSnapComponent') !== 'status-comp') {
        this.set('activeSnapComponent', 'status-comp');
      } else {
        this.set('activeSnapComponent', '');
      }
    },

    // Search assistant bar
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

    // Remove news feed item
    removeNewsItem(feedItem) {
      this.set('newsFeedData', this.get('newsFeedData').filter(feed => feed.id !== feedItem.id));
    }
  }
});
