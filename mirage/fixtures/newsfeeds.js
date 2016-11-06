export default [{
  category: 'payment_upcoming',
  detail: 'You have an upcoming payment that you may not meet.',
  groupName: 'Alert',
  groupKey: 'alerts',
  level: 1, // 1 red, 2, orange, 3 green
  title: 'Potential insufficient funds'
}, {
  category: 'message',
  detail: 'The current Terms and Agreement have changed.  Read more details here.',
  groupName: 'Message',
  groupKey: 'messages',
  title: 'Terms and Agreement changes'
}, {
  category: 'deposit',
  detail: 'Deposit added to your account',
  groupName: 'Notification',
  groupKey: 'notifications',
  title: 'New income added'
}, {
  category: 'payment_upcoming',
  detail: 'Upcoming rent payment',
  groupName: 'Notification',
  groupKey: 'notifications',
  title: 'Upcoming rent payment'
}, {
  category: 'payment_past',
  detail: 'A payment was made.',
  groupName: 'Notification',
  groupKey: 'notifications',
  title: 'Bill paid, awesome!'
}];
