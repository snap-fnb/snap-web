import Ember from 'ember';

export default Ember.Component.extend({
  /**
   * Resulted from selecting person from person-list comp
   */
  selectedPerson: null,

  selectedAppointment: null,

  hasAppointment: Ember.computed('selectedAppointment', {
    get() {
      const selectedAppointment = this.get('selectedAppointment');
      return !!selectedAppointment;
    }
  }),

  appointmentList: Ember.computed('selectedPerson.appointmentList', {
    get() {
      const selectedPersonWithAppointments = this.get('selectedPersonWithAppointments');
      return selectedPersonWithAppointments.appointmentList;
    }
  }),

  /**
   * Quick way to listen to updated person and get available appointment data
   */
  selectedPersonWithAppointments: Ember.computed('selectedPerson', {
    get() {
      const selectedPerson = this.get('selectedPerson');

      selectedPerson.appointmentList = [
        {
          start: '8:00 AM',
          end: '9:00 AM'
        },
        {
          start: '9:00 AM',
          end: '10:00 AM'
        }
      ];
      return selectedPerson;
    }
  }),

  actions: {
    selectAppointment(appointment)
    {
      const appointmentList = this.get('appointmentList');
      appointmentList.clear();
      this.set('selectedAppointment', appointment);
      appointmentList.pushObject(appointment);
    }
  }
})
;
