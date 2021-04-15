export function notificationsMockFactory() {
  return jasmine.createSpyObj('NotificationService', {
    pushNotification() {}
  })
}
