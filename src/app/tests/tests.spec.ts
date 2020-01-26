import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReceiveComponent } from '../receive/receive.component';
import { ReceiveMaterialModule } from '../receive/receive-material.module';
import { ReceiveServicesModule } from '../receive/receive-services.module';
import { AmountMaskPipe } from '../shared/amount-mask.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { ReceiveRoutingModule } from '../receive/receive-routing.module';
import { MatSnackBarModule } from '@angular/material';

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
        HttpClientModule,
        RouterTestingModule,
        ReceiveMaterialModule,
        BrowserAnimationsModule,
        ReceiveServicesModule,
        MatSnackBarModule,
      ],
      providers: [AmountMaskPipe],
    });

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
    // fixture.detectChanges();

    expect(component.limitCtrl.valid).toBeTruthy();
  });

  it('should invalid then limit value less than 0.01', () => {
    component.limitCtrl.patchValue(0);
    // fixture.detectChanges();

    expect(component.limitCtrl.valid).toBeFalsy();
  });

  it('should mask value if fractional part has more than 2 digits', () => {
    component.limitCtrl.patchValue(1.123);
    // fixture.detectChanges();

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
});
