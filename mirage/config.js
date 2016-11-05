export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.get('/search', ({ suggestions }, request) => {
    let id = request.params.id;

    return {
      canI: [{
        desc: 'Go to eat at Block 16',
      }],
      showMe: [{
        desc: 'How much I spent at Block 16 this week'
      }, {
        desc: 'How often go to Block 16'
      }]
    };
  });
  // passthrough to the node server that is middleware to slack.
  this.passthrough('http://localhost:1337/**');
}
