import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SideBarComponent } from './shared/sidebar/sidebar.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';
import { environment } from 'src/environments/environment';
import { PendingInterceptor } from './interceptors/pending.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpMockRequestInterceptor } from './interceptors/api-mock.interceptor';
import { HttpRequestInterceptor } from './interceptors/api.interceptor';
import { HttpErrorsInterceptor } from './interceptors/error.interceptor';

export const isMock = environment.mock;
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    WelcomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PendingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: isMock ? HttpMockRequestInterceptor : HttpRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
