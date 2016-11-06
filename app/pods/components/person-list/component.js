import Ember from 'ember';

export default Ember.Component.extend({

  selectedPerson: null,

  personList: [
    {
      name: 'Will DeRosear',
      pictureUrl: 'https://www.firstnational.com/common/shared/e_communication/weekly-mortgage-news/images/william_derosear.jpg',
      location1: 'Downtown Office',
      location2: '1620 Dodge Street',
      location3: 'Omaha, NE 68197',
      office: '402-602-8923',
      email: 'wderosear@fnni.com',
      isAvailableNow: true
    },
    {
      name: 'Amanda Barnes',
      pictureUrl: 'https://www.firstnational.com/common/shared/e_communication/weekly-mortgage-news/images/amanda_barnes.jpg',
      location1: '144th & Stony Brooke Branch',
      location2: '5812 S. 144th Street',
      location3: 'Omaha, NE 68137',
      office: '402-602-2787',
      email: 'abarnes@fnni.com',
      isAvailableNow: false
    },
    {
      name: 'Cory Beckius',
      pictureUrl: 'https://www.firstnational.com/common/shared/e_communication/weekly-mortgage-news/images/cory_beckius.jpg',
      location1: '167th & Giles Branch',
      location2: '8311 S 167th Plaza',
      location3: 'Omaha, NE 68136',
      office: '402-602-4881',
      email: 'cbeckius@fnni.com',
      isAvailableNow: false
    },
    {
      name: 'Karyn Randone',
      pictureUrl: 'https://www.firstnational.com/common/shared/e_communication/weekly-mortgage-news/images/karyn_randone.jpg',
      location1: '167th & Maple Branch',
      location2: '16770 W Maple Road',
      location3: 'Omaha, NE 68116',
      office: '402-602-5394',
      email: 'krandone@fnni.com',
      isAvailableNow: false
    }
  ],
  actions: {
    selectPerson(person) {
      this.get('selectPersonAction')(person);
    },
    chatWithPerson(person) {
      // TODO activate Chat
    }
  }

});
