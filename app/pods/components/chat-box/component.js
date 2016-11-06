import Ember from 'ember';

export default Ember.Component.extend({
  options: {
    serverUrl: 'http://localhost:1337', // Url to your Slack server component
    widgetState: 'open', // Have the component start opened or closed

    headerText: 'How can we help?', // Text in the widget header
    headerImage: 'assets/images/fnb_circle_logo.png', // Path to profile image

    emptyChatTopic: 'Support chat', // Topic to show inside empty chat
    emptyChatText: 'Questions? Just type it below and we\'ll answer you..', // Text to show inside empty chat

    inputPlaceholderText: 'Write message here...', // Placeholder for the text input

    supportUserName: 'FNB Advisor: Tracey', // Name to show support replies under
    chatUserName: 'Me' // Name to show before user messages
  }
});
