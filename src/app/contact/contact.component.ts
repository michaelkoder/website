import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { FormGroup, FormControl,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mail: new FormControl(''),
    title: new FormControl(''),
    message: new FormControl('')
  });
    ngOnInit(): void {
  }
  sendContact(){
    console.log(this.profileForm);
  }

  title = 'Angular Form Validation Tutorial';
   angForm: FormGroup;
   angForm2: FormGroup;
   constructor(private fb: FormBuilder) {
    this.createForm();
    this.createForm2();
  }
  createForm() {
   this.angForm = this.fb.group({
     name: ['', Validators.required ],
     firstName: ['', Validators.required ],
     titreMessage: ['', Validators.required ],
     email: ['', Validators.required ],
     contactMessage: ['', Validators.required ]
   }); 
 }
 createForm2() {
  this.angForm2 = this.fb.group({
    name: ['', Validators.required ],
    firstName: ['', Validators.required ]
  }); 
}
}
