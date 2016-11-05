import Ember from 'ember';
import NLP from 'npm:nlp_compromise';

const { Logger: { info }} = Ember;

const house = ['house', 'mortgage', 'loan', 'refinance', '2nd', 'second'];
const appointment = ['teller', 'banker', 'in person', 'meeting', 'start', 'escrow', 'appointment', 'lender'];
const transactions = ['deposit', 'transfer', 'transaction', 'withdraw', 'escrow', 'payment'];
// const places = ['Block 16', 'Flat Iron Cafe'];
const spendEvents = ['lunch', 'dinner', 'go out', 'eat', 'repair', 'vacation'];
const accounts = ['college', 'funds', 'mine', 'partner'];
const location = ['branch'];

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
    // Get the search term.
    let search = request.queryParams.query;

    // Parse the search term as a sentance.
    let parsedQuestion = NLP.sentence(decodeURIComponent(search));

    // Filter out nouns, verbs, adjectives.  We don't really care about the
    // rest for now.
    let searchTerms = parsedQuestion.terms.filter(term => {
      return ['Noun', 'Verb', 'Adjective', 'Infinitive'].includes(term.tag);
    });

    info('Search terms: ', searchTerms, ' Parsed Question: ', parsedQuestion);

    let canIResults = [];
    let showMeResults = [];

    // TODO: check account to determine if they have a mortgage
    let houseTerms = searchTerms.filter(term => house.includes(term.normal));
    if (houseTerms.length) {
      canIResults = canIResults.concat([{
        desc: 'Buy a house soon',
        codeName: 'future_transaction_mortgage_app'
      }]);

      showMeResults = showMeResults.concat([{
        desc: 'Start a mortage application',
        codeName: 'future_transaction_mortgage_app'
      }]);
    }

    // Match appointments
    let appointmentTerms = searchTerms.filter(term => appointment.includes(term.normal));
    if (appointmentTerms.length) {
      showMeResults = showMeResults.concat([{
        desc: 'Schedule an appointment with a banker',
        codeName: 'appointment_setup_banker'
      }, {
        desc: 'Schedule an appointment with a lender',
        codeName: 'appointment_setup_lender'
      }, {
        desc: 'See all branches with lenders and bankers',
        codeName: 'location_with_bankers_lenders'
      }]);
    }

    // Match transactions
    let transactionTerms = searchTerms.filter(term => transactions.includes(term.normal));
    if (transactionTerms.length) {
      canIResults = canIResults.concat([{
        desc: 'Transfer money',
        codeName: 'transaction_money_transfer'
      }]);

      if (parsedQuestion.adjectives().filter(a => a.normal === 'all').length) {
        showMeResults = showMeResults.concat([{
          desc: 'Recent deposits',
          codeName: 'transaction_list_recent_deposits'
        }, {
          desc: 'Recent transfers',
          codeName: 'transaction_list_recent_tranfers'
        }, {
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
    }

    // Match spend events
    let spendEventTerms = searchTerms.filter(term => spendEvents.includes(term.normal));
    if (spendEventTerms.length) {
      let value = '';
      let desc = '';

      if (parsedQuestion.values()[0]) {
        value = parsedQuestion.values()[0].text;
      }

      if (value) {
        desc = `Spend ${value} for ${spendEventTerms[0].normal}`;
      } else {
        desc = `Spend money on ${spendEventTerms[0].normal}`;
      }

      canIResults = canIResults.concat([{
        desc,
        codeName: 'safe_to_spend'
      }]);

      showMeResults = showMeResults.concat([{
        desc: `See all ${spendEventTerms[0].normal} transactions`,
        codeName: 'transaction_filter_by_place'
      }, {
        desc: 'See all restaurant transactions',
        codeName: 'transaction_filter_by_category'
      }]);
    }

    // Match on accounts
    let accountTerms = searchTerms.filter(term => accounts.includes(term.normal));
    if (accountTerms.length) {
      showMeResults = showMeResults.concat([{
        desc: 'See all college funds',
        codeName: 'account_filter_by_college'
      }, {
        desc: 'See all accounts',
        codeName: 'account_all'
      }, {
        desc: 'See investment accounts',
        codeName: 'account_investment'
      }]);
    }

    // Match on accounts
    let locationTerms = searchTerms.filter(term => location.includes(term.normal));
    if (locationTerms.length) {
      showMeResults = showMeResults.concat([{
        desc: 'Branch locations',
        codeName: 'location_branch_all'
      }, {
        desc: 'All ATMs',
        codeName: 'location_atm_all'
      }, {
        desc: 'All ATMs with deposit',
        codeName: 'location_atm_filter_deposit'
      }, {
        desc: 'All drive-thrus',
        codeName: 'location_atm_filter_drive_thru'
      }]);
    }

    return {
      canI: canIResults,
      showMe: showMeResults
    };
  });
  // passthrough to the node server that is middleware to slack.
  this.passthrough('http://localhost:1337/**');
}
