import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['safe-to-spend'],
  
  model: {},
  
  axis: {
    x: {
      type: 'timeseries',
      tick: {
        format: '%Y-%m-%d'
      }
    }, 
    y: {
      tick: {
        format: function (d) { return '$' + d; }
      }
    }
  },

  color: {
    pattern: ['#aec7e8', '#ffb200']
  },

  data: {
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
      'Average',
      10,
      15,
      12,
      13,
      15,
      9
    ],
    [
      'This month',
      9,
      7,
      11,
      9,
      5,
      20
    ]
  ],
  types: {
    Average: 'area',
    'This month': 'line',
  }
}
});
