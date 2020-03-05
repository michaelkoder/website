import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// https://stackoverflow.com/questions/47824181/email-wont-send-angular-4-php/47870021


export interface IMessage {
  name?: string;
  email?: string;
  message?: string;
}

@Injectable()
export class AppService {
  private emailUrl = '../app/get-in-touch/email.php';

  constructor(private http: Http) {

  }

  sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error);
      });
  }
}