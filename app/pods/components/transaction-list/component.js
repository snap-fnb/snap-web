import Ember from 'ember';

export default Ember.Component.extend({
  transactions: [
  {dateStamp: '11/3/2016',payee:'Good Life Insurance',
    outflow: 147.93, inflow: 0.0, cleared: true,
    category: 'Expenses', memo: 'For Matt' },
  {dateStamp: '11/3/2016',payee:'SAC Credit Union',
    outflow: 147.93, inflow: 0.0, cleared: true,
    category: 'Debt', memo: 'BYTE'
  },
  {dateStamp: '11/4/2016',payee:'State of Nebraska',
    outflow: 0.0, inflow: 1234.56, cleared: true,
    category: 'Income', memo: 'Matt'
  },
  {dateStamp: '11/4/2016',payee:'State of Nebraska',
    outflow: 0.0, inflow: 1234.56, cleared: true,
    category: 'Income', memo: 'Tracey'
  },
  {dateStamp: '11/7/2016',payee:'AT&T',
    outflow: 156.12, inflow: 0.0, cleared: false,
    category: 'Expenses', memo: 'Phones'
  }

]
});
