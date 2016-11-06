import Ember from 'ember';

export default Ember.Controller.extend({
  // Ember ajax service.
  ajax: Ember.inject.service(),
  
  // The currently displayed component.  This is the result of choosing a search
  // suggestion or one of the action items.
  activeSnapComponent: '',

  // The data to pass to the currently active snap component.
  activeSnapComponentTransientData: null,

  // Newsfeed data
  newsFeedData: null,

  actions: {
    // Chooses the component to display and sets its data.
    displaySnapComponent(chosenItem) {
      this.setProperties({
        activeSnapComponentTransientData: chosenItem,
        activeSnapComponent: chosenItem.componentName
      });
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
      if (this.get('activeSnapComponent') !== 'news-feed') {
        this.set('activeSnapComponent', 'news-feed');
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
