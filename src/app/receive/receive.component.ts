import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from './receive.service';
import { AppStateService } from '../services/app-state.service';
import { NotificationsService } from '../services/notifications.service';
import { AutoUnsubscribe } from '../shared/decorators';
import { Subscription } from 'rxjs';
import { AmountMaskPipe } from '../shared/amount-mask.pipe';
import { SessionStorageService } from '../shared/session-storage.service';

@AutoUnsubscribe()
@Component({
  selector: 'ng7-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.scss'],
})
export class ReceiveComponent implements OnInit {
  private pendingSubscription: Subscription;
  private limitSubscription: Subscription;
  private readonly LIMIT_KEY = 'limit';

  public pending: boolean;
  public limitCtrl = new FormControl('', {
    validators: [Validators.required, Validators.min(0.01)],
  });

  public receiveClick() {
    if (!this.pending) {
      const limit = this.limitCtrl.value;
      this.http.postForm({ limit }).subscribe(res => {
        this.notifications.showMessage(`Лимит ${limit} установлен`);
      });
    }
  }

  constructor(
    private http: HttpService,
    private appState: AppStateService,
    private notifications: NotificationsService,
    private amountMaskPipe: AmountMaskPipe,
    private storage: SessionStorageService
  ) {}

  ngOnInit() {
    const limitValue = this.storage.getSessionStorageValue(this.LIMIT_KEY);
    if (limitValue) {
      this.limitCtrl.patchValue(limitValue, {
        onlySelf: true,
        emitEvent: false,
      });
    }

    this.pendingSubscription = this.appState.pendingVisibility$.subscribe(
      pending => (this.pending = pending)
    );

    this.limitSubscription = this.limitCtrl.valueChanges.subscribe(value => {
      const maskedValue = this.amountMaskPipe.transform(value);

      if (value !== maskedValue) {
        this.limitCtrl.patchValue(maskedValue, {
          onlySelf: true,
          emitEvent: false,
        });
      }

      const limit = this.limitCtrl.value;
      this.storage.setSessionStorageValue(this.LIMIT_KEY, limit);
    });
  }
}
