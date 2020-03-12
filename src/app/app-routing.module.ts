import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ConceptionComponent } from './conception/conception.component';
import { GraphismeComponent } from './graphisme/graphisme.component';
import { PolitiqueConfidentialiteComponent } from './politique-confidentialite/politique-confidentialite.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { ConditionsGeneralesDeVentesComponent } from './conditions-generales-de-ventes/conditions-generales-de-ventes.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'graphisme',component:GraphismeComponent},
  {path:'conception',component:ConceptionComponent},
  {path:'contact',component:ContactComponent},
  {path:'politique-confidentialite',component:PolitiqueConfidentialiteComponent},
  {path:'mentions-legales',component:MentionsLegalesComponent},
  {path:'conditions-generales-de-vente',component:ConditionsGeneralesDeVentesComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
