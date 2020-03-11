import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// https://stackoverflow.com/questions/47824181/email-wont-send-angular-4-php/47870021


export interface IMessage {
  name: string;
  firstName: string;
  phone: string;
  title: string;
  email: string;
  message: string;
}


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class AppService {
  private emailUrl = 'https://michaelkoder.com/contact.php';

  constructor(private http: HttpClient) {

  }

  sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message, httpOptions)
    .subscribe(response => {
      console.log('Sending email was successfull', response);
      return response;
    })
  }

  /*
  sendEmail2(message: IMessage): Observable<IMessage> | any {
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
  */


}