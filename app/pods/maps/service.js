import Ember from 'ember';
import MapUtil from '../../utils/google-maps';

export default Ember.Service.extend({

  init() {
    if (!this.get('mapUtil')) {
      this.set('mapUtil', MapUtil.create());
      //console.log('mapUtil', this.get('mapUtil'));
    }
  },

  getMapElement(element) {
    //const element = this.createMapElement();
    console.log('element in getMapElement', element);
    this.get('mapUtil').createMap(element);
    return element;
  },

  createMapElement() {
    let element = document.createElement('div');
    element.className = 'map';
    return element;
  }

});
