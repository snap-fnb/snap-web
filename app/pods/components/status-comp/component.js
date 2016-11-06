import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['my-snap'],

  size: {
    height: 200
  },

  balanceAxis: {
    x: {
      type: 'timeseries',
      tick: {
        format: '%d'
      }
    },
    y: {
      tick: {
        format: function (d) {
          return '$' + d;
        }
      }
    }
  },

  balanceData: {
    'x': 'x',
    'columns': [
      [
        'x',
        '2016-11-01',
        '2016-11-02',
        '2016-11-03',
        '2016-11-04',
        '2016-11-05',
        '2016-11-06'
      ],
      [
        'Balance',
        3000,
        2800,
        2750,
        2725,
        2680,
        2534
      ],
      [
        'Expenses',
        0,
        200,
        250,
        275,
        320,
        466
      ]
    ]
  }
});
