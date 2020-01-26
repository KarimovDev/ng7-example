import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestData } from '../shared/app.models';
import { ReceiveServicesModule } from './receive-services.module';

@Injectable({
  providedIn: ReceiveServicesModule,
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public postForm(data: RequestData): Observable<any> {
    return this.http.post<any>('/api/receive', { ...data });
  }
}
