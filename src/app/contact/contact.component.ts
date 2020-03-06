import { Component, OnInit} from '@angular/core';
import { AppService,IMessage } from '../connection.service';
import { FormGroup, FormControl,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [AppService]
})
export class ContactComponent implements OnInit {

  url: string = 'http://digikoder.com/contact';
  message: IMessage;

  ngOnInit(): void {

  }
  
  //https://www.truecodex.com/course/angular-project-training/create-contact-form-and-send-data-on-email-angular
 
  envoiMail() {
    this.message = this.angForm.value;
    this.appService.sendEmail(this.message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    });
  }

   angForm: FormGroup;
   constructor(private fb: FormBuilder,
    private appService: AppService
    ) {
    this.createForm();
  }
  createForm() {
   this.angForm = this.fb.group({
     name: ['', Validators.required ],
     firstName: ['', Validators.required ],
     phone: ['', Validators.required ],
     email: ['', Validators.required ],
     titreMessage: ['', Validators.required ],
     contactMessage: ['', Validators.required ]
   }); 
 }
}
