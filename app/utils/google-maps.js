import Ember from 'ember';

const google = window.google;

export default Ember.Object.extend({

  createMap(element) {
    // Downtown location needs to be here
    let downtown = {lat: -33, lng: 151};
    //{ lat: 41.260022, lng: -95.937817 };

    console.log('passing element into map', element);
    let map = new google.maps.Map(element, {
      scrollwheel: false,
      zoom: 15,
      disableDefaultUI: true,
      center: downtown
    });
    console.log('map created, now pin location');

    this.pinLocation(map, downtown);
    console.log('now returning map', map);
    return map;
  },

  pinLocation(map, location) {
    console.log('setting marker');
    new google.maps.Marker({
      position: location,
      title: 'First National Bank - Downtown',
      map: map
    });
    console.log('done pinning', map);
  }

});
