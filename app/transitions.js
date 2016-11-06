export default function() {
  this.transition(
    this.fromRoute('index'),
    this.toRoute('snap'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  // News Feed
  this.transition(
    this.hasClass('news-feed-container'),
    this.toValue(true),
    this.use('toDown', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
  );

  // Status Component
  this.transition(
    this.hasClass('status-container'),
    this.toValue(true),
    this.use('toDown', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
  );

  // Appointment Scheduler
  this.transition(
    this.hasClass('appointment-scheduler-container'),
    this.toValue(true),
    this.use('toDown', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
  );

  // Safe to spend
  this.transition(
    this.hasClass('safe-to-spend-container'),
    this.toValue(true),
    this.use('toDown', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
  );

  // Create transfer
  this.transition(
    this.hasClass('create-transfer-container'),
    this.toValue(true),
    this.use('toDown', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
  );

  // Transaction List
  this.transition(
    this.hasClass('transaction-list-container'),
    this.toValue(true),
    this.use('toDown', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
  );

  // Account List
  this.transition(
    this.hasClass('account-list-container'),
    this.toValue(true),
    this.use('toDown', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
  );

  // Location
  this.transition(
    this.hasClass('location-map-container'),
    this.toValue(true),
    this.use('toDown', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
  );
}