import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { AppService } from '../connection.service';
import { TranslateService,LangChangeEvent } from '@ngx-translate/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers : [AppService]

})
export class HomeComponent implements OnInit {

  public currentLang: string ="fr";
  public dispos:any;
  public dispos2:any;
  constructor(public _changeDetectorRef: ChangeDetectorRef,public appService: AppService,public translate: TranslateService) {
    this.currentLang = translate.currentLang;
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang;
      this._changeDetectorRef.detectChanges();
      if(this.currentLang=='fr'){
        this.dispos2 = this.dispos.fr;
      }
      else{
        if(this.currentLang=='en'){
          this.dispos2 = this.dispos.en;
        }
      }
    });
  }

  // dispos:Observable<any>

  ngOnInit(): void {
    this.appService.getJson("assets/data/dispos.json").subscribe(data =>{
      this.dispos = data['dispos'];
      this.dispos2 = this.dispos.fr;
    });
    /*
    this.dispos=Observable.create(Observable => this.appService.getJson("assets/data/dispos.json"));
    this.dispos.subscribe(data =>{
        this.dispos = data['dispos'];
    });
    */
    this.currentLang ="fr";
  }
  
}
