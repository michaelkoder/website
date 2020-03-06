import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ConceptionComponent } from './conception/conception.component';
import { GraphismeComponent } from './graphisme/graphisme.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { MyModalComponent } from './my-modal/my-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ConceptionComponent,
    GraphismeComponent,
    ContactComponent,
    MyModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,FormsModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
