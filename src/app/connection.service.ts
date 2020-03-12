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
  email: string;
  title: string;
  message: string;
}


@Injectable()
export class AppService {
  private emailUrl = 'https://michaelkoder.com/contact.php';
  constructor(private http: HttpClient) {}
  sendEmail(message: IMessage): Observable<IMessage> | any {
    let json = JSON.stringify(message);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.emailUrl, params, { headers: headers })
  }
  getJson(url){
    return this.http.get(url);
  }
}