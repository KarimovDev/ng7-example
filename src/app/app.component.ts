import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStateService } from './services/app-state.service';

@Component({
  selector: 'ng7-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public isShowingPendingIndicator$: Observable<boolean>;

  constructor(private appState: AppStateService) {}

  ngOnInit() {
    this.isShowingPendingIndicator$ = this.appState.pendingVisibility$;
  }
}
