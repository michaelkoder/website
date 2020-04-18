import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(    
    public translate: TranslateService,
    public route :ActivatedRoute
    ) { 
      translate.addLangs(['fr', 'en']);
      translate.setDefaultLang('fr');
    }
  currentLang:any="";
  langParam:any='';
  ngOnInit(): void {
    console.log('currentLang > ');
    console.log(this.currentLang);
    this.route.queryParams.subscribe(params => {
      this.langParam = params['lang'];
      if(this.langParam=='fr' || this.langParam=='en'){
        this.translate.use(this.langParam);
      }
    });
  }
  switchLang(lang: string) {
    this.translate.use(lang);
    this.currentLang=lang;
  }

}
