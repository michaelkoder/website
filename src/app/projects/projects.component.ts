import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  $ : any;


  popinTitle="projet";
  popinContent="projetContent";
  popinSrc="popinSrc";
  popinLink="popinSrc";
  
  constructor( ) {}


  openModal(newTitle:'title', newContent:'content', newSrc:'img', popinLink){
    this.popinTitle=newTitle;
    this.popinContent=newContent; 
    this.popinSrc=newSrc;
    this.popinLink=popinLink;
  }

  projectList:Object=[
    { id:'perso',title:"Projets Personnels",projects:[
        {id:0,cat:'perso',name:'DIGIKODER.COM',logo:'digikoder.jpg', description:'Une plateforme de vente de sites en ligne basée sur le CMS Wordpress avec de multiples optimisations/customisations',url:"https://digikoder.com"},
        {id:1,cat:'perso',name:'VENDRENLIGNE.COM',logo:'vendrenligne.jpg', description:'Un service de boutique en ligne gratuit pour professionnels et particuliers que j\'ai conceptualisé, conçu, réalisé entièrement. Actuellement en phase de pré-lancement',url:"https://vendrenligne.com/"}  
      ]
    },
    { id:'wp',title:"Projets Wordpress",projects:[
      {id:0,cat:'wp',name:'LA SERVIETTE PARIS',logo:'laserviette.jpg', description:'Un site de vente en ligne de serviettes de luxe auquel j\'ai ajouté des évolutions et des optimisations comportants un module de personnalisation pour ajouter une broderie personnalisée sur les serviettes',url:"https://shop.laservietteparis.com/"},
      {id:1,cat:'wp',name:'LAUREFERLICOT.FR',logo:'laureferlicot.jpg', description:'Porte folio d\'une web designer réalisé avec wordpress + du code pour la home page à partir de maquettes PSD',url:"https://laureferlicot.fr/"},
      {id:2,cat:'wp',name:'ACFA-PREMIUM',logo:'acfpremium.jpg', description:'Le site et refonte d\'un site html vers wordpress + optimisations vitesse, sécurité, responsive design',url:"https://www.acfa-premium.com/"},
      {id:3,cat:'wp',name:'CONTENT FACTORY',logo:'contentfactory.jpg', description:'Portfolio du photographe Luc TEBOUL.',url:"https://lacontentfactory.com/"},
      {id:4,cat:'wp',name:'DEMO SHOP',logo:'demoshop.jpg', description:'Démonstration de site de vente en ligne avec les outils : wordpress et woocommerce.',url:"https://digikoder.com/demoShop/"},
      {id:5,cat:'wp',name:'LA BOUSSOLE URBAINE',logo:'labousolle.jpg', description:'Réalisation du site internet de l\'association La boussole urbaine qui aide les sdf.',url:"https://www.laboussoleurbaine.com/"},
      {id:6,cat:'wp',name:'PHOENIX CREATION',logo:'phoenix.jpg', description:'Site de vente en ligne d’un ami créateur de bijoux et de matériel de jonglage.',url:"https://www.phoenixcrea.com/"},
      {id:7,cat:'wp',name:'PRO-D PREMIUM',logo:'prodpremium.jpg', description:'Entreprise spécialisée dans l\'aide à la mise en conformité sur la protection des données à caractère personnel - RGPD',url:"https://pro-dpremium.com/"}
     ]
    },
    { id:'code',title:"Autres Projets",projects:[
      {id:0,cat:'code',name:'MEDIAWAYS',logo:'mediaways.jpg', description:'Réalisation d\'une solution web richmedia de synchronisation texte/image/video ainsi qu\'une application web complexe d\'automatisation de la génération des projets .',url:"https://digikoder.com/CONTENUS/users/mediaways/"},
    ]
    }
 ];

  ngOnInit(): void {


  }
}
