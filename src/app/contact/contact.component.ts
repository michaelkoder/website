import { Component, OnInit} from '@angular/core';
import { AppService,IMessage } from '../connection.service';
import { FormGroup, FormControl,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


 const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'mon-entete-personnalise':'maValeur'
  })
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [AppService]
})
export class ContactComponent implements OnInit {

  message: IMessage;
  sendMessageStatus='';
  ngOnInit(): void {
    this.sendMessageStatus='';
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

   angForm: FormGroup;
   constructor(private fb: FormBuilder,
    private appService: AppService
    ) {
    this.createForm();
  }

  envoiMail(){
    this.appService.sendEmail(this.angForm.value).subscribe(data =>{
      
      console.log('RETOUR > '+data);
      this.sendMessageStatus = data;
    })

  }
}