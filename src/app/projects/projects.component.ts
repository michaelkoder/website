import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { AppService } from '../connection.service';
import { TranslateService,LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers : [AppService]
})
export class ProjectsComponent implements OnInit {

  $ : any;

  popinTitle="projet";
  popinContent="projetContent";
  popinSrc="popinSrc";
  popinLink="popinSrc";
  public currentLang: string ="fr";
  public projectJsonUrl ="assets/data/projects_fr.json";

  constructor(public _changeDetectorRef: ChangeDetectorRef,public appService: AppService,public translate: TranslateService) {
    this.currentLang = translate.currentLang;
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang;
      this._changeDetectorRef.detectChanges();
      if(this.currentLang=='fr'){
        this.projectJsonUrl = "assets/data/projects_fr.json";
        this.appService.getJson(this.projectJsonUrl).subscribe(data =>{
          this.projectList = data['projectsList'];
        });
      }
      else{
        if(this.currentLang=='en'){
          this.projectJsonUrl = "assets/data/projects_en.json";
          this.appService.getJson(this.projectJsonUrl).subscribe(data =>{
            this.projectList = data['projectsList'];
          });
        }
      }
    });
  }

  openModal(newTitle:'title', newContent:'content', newSrc:'img', popinLink){
    this.popinTitle=newTitle;
    this.popinContent=newContent; 
    this.popinSrc=newSrc;
    this.popinLink=popinLink;
  }

  projectList:any;

  ngOnInit(): void {
    console.log('GET PROJECTS')
    this.appService.getJson(this.projectJsonUrl).subscribe(data =>{
      this.projectList = data['projectsList'];
    });

  }
}
