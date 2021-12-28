import {NzNotificationService} from 'ng-zorro-antd/notification';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageHandler {
  constructor(private notification: NzNotificationService) {}

  handleSuccess(message: string): void {
    this.notification.success('Notification', message);
  }
}
