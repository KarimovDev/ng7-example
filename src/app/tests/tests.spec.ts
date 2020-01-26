import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReceiveComponent } from '../receive/receive.component';
import { ReceiveMaterialModule } from '../receive/receive-material.module';
import { ReceiveServicesModule } from '../receive/receive-services.module';
import { AmountMaskPipe } from '../shared/amount-mask.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReceiveRoutingModule } from '../receive/receive-routing.module';
import { MatSnackBarModule } from '@angular/material';
import { HttpService } from '../receive/receive.service';
import { NotificationsService } from '../services/notifications.service';

describe('ReceiveComponent', () => {
  let component: ReceiveComponent;
  let fixture: ComponentFixture<ReceiveComponent>;
  let debug: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiveComponent],
      imports: [
        CommonModule,
        ReceiveRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReceiveMaterialModule,
        BrowserAnimationsModule,
        ReceiveServicesModule,
        MatSnackBarModule,
      ],
      providers: [AmountMaskPipe],
    });

    // let store = {};
    // const mockSessionStorage = {
    //   getItem: (key: string): string => {
    //     return key in store ? store[key] : null;
    //   },
    //   setItem: (key: string, value: string) => {
    //     store[key] = `${value}`;
    //   },
    //   removeItem: (key: string) => {
    //     delete store[key];
    //   },
    //   clear: () => {
    //     store = {};
    //   },
    // };
    // spyOn(sessionStorage, 'getItem').and.callFake(mockSessionStorage.getItem);
    // spyOn(sessionStorage, 'setItem').and.callFake(mockSessionStorage.setItem);
    // spyOn(sessionStorage, 'removeItem').and.callFake(mockSessionStorage.removeItem);
    // spyOn(sessionStorage, 'clear').and.callFake(mockSessionStorage.clear);

    fixture = TestBed.createComponent(ReceiveComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    // fixture.nativeElement

    component.ngOnInit();
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

  it('should valid then limit value more than 0.01', () => {
    component.limitCtrl.patchValue(0.01);

    expect(component.limitCtrl.valid).toBeTruthy();
  });

  it('should invalid then limit value less than 0.01', () => {
    component.limitCtrl.patchValue(0);

    expect(component.limitCtrl.valid).toBeFalsy();
  });

  it('should mask value if fractional part has more than 2 digits', () => {
    component.limitCtrl.patchValue(1.123);

    expect(component.limitCtrl.value).toBe(1.12);
  });

  it('should have disable attribute on button if value invalid', () => {
    const button = debug.query(By.css('button'));
    component.limitCtrl.patchValue(-1);
    fixture.detectChanges();

    expect(button.attributes['ng-reflect-disabled']).toBeTruthy();
  });

  it('should have not disable attribute on button if value valid', () => {
    const button = debug.query(By.css('button'));
    component.limitCtrl.patchValue(1);
    fixture.detectChanges();

    expect(button.attributes['ng-reflect-disabled']).toBeNull();
  });

  it('should save last entered value in session', () => {
    component.limitCtrl.patchValue(100.11);

    const fixtureNew = TestBed.createComponent(ReceiveComponent);
    const componentNew = fixtureNew.componentInstance;

    componentNew.ngOnInit();

    expect(componentNew.limitCtrl.value).toBe('100.11');
  });

  it('should not call http service if pending', () => {
    component.pending = true;

    const receiveService = debug.injector.get(HttpService);
    const postForm = spyOn(receiveService, 'postForm').and.callThrough();

    component.receiveClick();

    expect(postForm).not.toHaveBeenCalled();
  });

  it('should call http service if pending is false', () => {
    component.pending = false;

    const receiveService = debug.injector.get(HttpService);
    const postForm = spyOn(receiveService, 'postForm').and.callThrough();
    const notifications = debug.injector.get(NotificationsService);
    const showMessage = spyOn(notifications, 'showMessage').and.callThrough();

    component.receiveClick();

    expect(postForm).toHaveBeenCalled();
  });
});
