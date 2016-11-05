import NLP from 'npm:nlp_compromise';

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
    let search = request.queryParams.query;
    let parsedQuestion = NLP.sentence(decodeURIComponent(search));

    // Filter out nouns
    let searchTerms = parsedQuestion.terms.filter(term => {
      return ['Noun', 'Verb'].includes(term.tag);
    });

    console.log(searchTerms, parsedQuestion);

    let canIResults = [];
    let showMeResults = [];

    searchTerms.forEach(term => {
      switch (term.singularize()) {
        case 'transaction':
          if (parsedQuestion.adjectives().filter(a => a.normal === 'all').length) {
            showMeResults = showMeResults.concat([{
              desc: 'All future transactions',
              codeName: 'transaction_list_all_future'
            }, {
              desc: 'All past transactions this year',
              codeName: 'transaction_list_all_past_year'
            }]);
          } else {
            showMeResults = showMeResults.concat([{
              desc: 'Last 5 days',
              codeName: 'transaction_list_last_5'
            }, {
              desc: `This month's`,
              codeName: 'transaction_list_this_month'
            }, {
              desc: `Future`,
              codeName: 'transaction_list_this_year'
            }]);
          }
          break;
        case 'repair':
          canIResults = canIResults.concat([{
            desc: 'Safe to spend',
            codeName: 'safe_to_spend'
          }, {
            desc: 'Other sources',
            codeName: 'safe_to_spend_other'
          }]);
          break;
        default:
          break;
      }
    });
    
    return {
      canI: canIResults,
      showMe: showMeResults
    };
  });
}
