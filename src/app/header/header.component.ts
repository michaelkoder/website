import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(    
    public translate: TranslateService
    ) { 
      translate.addLangs(['fr', 'en']);
      translate.setDefaultLang('fr');
    }
  currentLang="";
  ngOnInit(): void {
    console.log('currentLang > ');
    console.log(this.currentLang);
  }
  switchLang(lang: string) {
    this.translate.use(lang);
    this.currentLang=lang;
  }

}
