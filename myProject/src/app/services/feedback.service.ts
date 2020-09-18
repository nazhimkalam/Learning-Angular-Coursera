import { Feedback } from './../shared/feedback';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  submitFeedback(feedback: Feedback): Observable<any> {
    // POST request to the server goes here . . .
    console.log('The below code is executed using the feedbackService');
    console.log(feedback);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post<Feedback>(baseURL + 'feedback', feedback, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
