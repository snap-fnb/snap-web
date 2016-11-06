import Ember from 'ember';

export default Ember.Component.extend({
  maps: Ember.inject.service(),

  didInsertElement() {
    this._super(...arguments);
    console.log('get maps', this.get('maps'));
    let mapElement = this.get('maps').getMapElement();
    console.log('mapElement', mapElement);
    this.$('.map-container').append(mapElement);
    console.log('jquery of map container', this.$('.map-container'));
  }
});
