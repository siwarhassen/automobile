import { Component,OnDestroy, OnInit   } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router,ActivatedRoute } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Marque } from '../classes/marque.classe';
import { MarquesService } from '../services/marque.service';
import { VoituresService } from '../services/voitures.service';
import {Voiture} from '../classes/voiture.classe';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  userId: string="";
  marques:Marque[];
  voituresancienne=[];
  voituresnouvelles=[];

  marqueA:string="";
  modeleA:string="";
  kilometrageA:number=0;
  anneeA:number=0;
  old:string="old";


  marqueN:string="";
  modeleN:string="";

  new:string="new";


  constructor(private voitureService: VoituresService,private marquesService: MarquesService,private router:Router,private auth:AuthService) { }
  ngOnInit(): void {

    this.userId = this.auth.userId;
    this.marques=this.marquesService.getMarques();


  }



  /******************chercher une voiture ancienne*********************************/
    selectChangemarqueancienne (event: any) {

     this.marqueA = event.target.value;

         this.voitureService.modeleparmarque(this.marqueA).then(
           (voitu:Voiture[]) => {
     this.voituresancienne=voitu;

           }
         );
   }
    selectChangemodeleancienne (event: any) {

      this.modeleA = event.target.value;
    }
    selectChangekilometrageancienne (event: any) {

       this.kilometrageA = event.target.value;
     }
    selectChangeanneeancienne (event: any) {

        this.anneeA = event.target.value;
      }
    chercherancienne()
   {
    let link = ['/recherchevoiture', this.marqueA, this.modeleA,this.kilometrageA,this.anneeA,this.old];
    this.router.navigate(link);
    }
    /*************************************************/




    /**************************chercher une nouvelle voiture**********************/
    selectChangemarquenouvelle (event: any) {

     this.marqueN = event.target.value;

         this.voitureService.voituresneuves(this.marqueN).then(
           (voitu:Voiture[]) => {
     this.voituresnouvelles=voitu;

           }
         );
   }
    selectChangemodelenouvelle (event: any) {

      this.modeleN = event.target.value;
    }

    cherchernouvelle()
   {
    let link = ['/recherchevoiture', this.marqueN, this.modeleN,this.kilometrageA,this.anneeA,this.new];
    this.router.navigate(link);
    }

}
