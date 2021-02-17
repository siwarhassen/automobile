import { Component, OnInit } from '@angular/core';
import {PipeTransform} from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { Router } from '@angular/router';
import { VoituresService} from '../services/voitures.service';
import {Voiture } from '../classes/voiture.classe';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import {Store,select} from '@ngrx/store';
import {loadAction} from '../store/actions/voitures.action';
import {getvoitures} from '../store/reducers/voitures.reducer';

import * as s from '../store/reducers/voitures.reducer';
import { Marque } from '../classes/marque.classe';
import { MarquesService } from '../services/marque.service';
import {concatMap,mergeMap,map,tap,catchError,switchMap} from 'rxjs/operators';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-voitures-occasions',
  templateUrl: './voitures-occasions.component.html',
  styleUrls: ['./voitures-occasions.component.css']
})
export class VoituresOccasionsComponent implements OnInit {
  //voitures:Voiture[];
  minValue: number = 2000;
   maxValue: number = 200000;

   options: Options = {
     floor: 2000,
     ceil: 200000,
     translate: (value: number, label: LabelType): string => {
       switch (label) {
         case LabelType.Low:

           return '<b>Min :</b> ' + value;
         case LabelType.High:

           return '<b>Max :</b> ' + value;

         default:
           return '$' + value;
       }
         //
     }
   };
   verifmarque:boolean=false;
   verifmodele:boolean=false;
   verifcouleur:boolean=false;
   verifannee:boolean=false;
   verifboite:boolean=false;

modelesearch:string;
marques:Marque[];
marquef:string="";

modele:string="";
couleur:string="";
annee:number=0;
boite:string="";
totalRecords:number=10;
page:number=1;
pagin:number=8;
      voituresancienne=[];
 voitures: Observable<Voiture[]>;
 p:number=2019;
  constructor(private marquesService: MarquesService,private store:Store<any>,private router:Router,private voitureservice:VoituresService) {

  //  this.store.select(getvoitures).subscribe(h=>this.voitures=h);
    //  this.store.select(getvoitures).subscribe(h=>console.log("hhh" h))
  //

}

  ngOnInit(): void {
    console.log(  this.verifboite);
        this.marques=this.marquesService.getMarques();
    /*const hotCity$ = city$
    .pipe(filter(city => getTemperature(city) > 20));*/
    /*​
hotCity$.subscribe(city => console.log(city));*/
​
    this.store.dispatch(new loadAction());
    this.voitures=this.store.select(getvoitures);

 //this.voitures=this.store.select(getvoitures).pipe(map( (members) =>  members.filter(m => m.annee >this.p) ));
// this.voitures.pipe(map( (members) =>  members.filter(m => m.marque != 'fiat') )).subscribe();
  }
  allerpageAccueil()
  {
    this.router.navigate([''])
  }
  detailvoiture()
  {
    this.router.navigate(['detailvoiture/:id'])
  }


  selectChangemarqueancienne (event: any) {

   this.marquef = event.target.value;

       this.voitureservice.modeleparmarque(this.marquef).then(
         (voitu:Voiture[]) => {
   this.voituresancienne=voitu;

         }
       );
       console.log(this.voituresancienne);
 }
 selectChangeboiteancienne (event: any) {

   this.boite = event.target.value;
 }

 selectChangeanneeancienne (event: any) {

   this.annee = event.target.value;
 }
 selectChangecouleurancienne (event: any) {

   this.couleur = event.target.value;
 }
 selectChangemodeleancienne (event: any) {

   this.modele = event.target.value;
 }

  filtrermarque()
  {

  }


  filtrerannee()
  { if(this.annee!=0)
  {

  this.voitures=this.store.select(getvoitures).pipe(map( (members) =>  members.filter(m => m.annee==this.annee) ));
    this.verifannee=true;
  }
  else if(this.annee==0)
  {
    //this.voitures=Observable<Voiture[]>;
    this.ngOnInit();
  }

  }
  filtrerboite()
  { if(this.boite!="")
  {

  this.voitures=this.store.select(getvoitures).pipe(map( (members) =>  members.filter(m => m.boite==this.boite) ));
  this.verifboite=true;
  console.log(  this.verifboite);
  }
  else if(this.boite=="")
  {
    //this.voitures=Observable<Voiture[]>;
    this.ngOnInit();
  }

  }


    filtrermodele()
    { if(this.modele!="")
    {

    this.voitures=this.store.select(getvoitures).pipe(map( (members) =>  members.filter(m => m.modele==this.modele) ));
      this.verifmodele=true;
    }
    else if(this.modele=="")
    {
      //this.voitures=Observable<Voiture[]>;
      this.ngOnInit();
    }

    }


    filtrercouleur()
    { if(this.couleur!="")
    {

    this.voitures=this.store.select(getvoitures).pipe(map( (members) =>  members.filter(m => m.couleur==this.couleur) ));
    this.verifcouleur=true;
    }
    else if(this.couleur=="")
    {
      //this.voitures=Observable<Voiture[]>;
      this.ngOnInit();
    }

    }

filtrerprix()
{ console.log(this.minValue );
  console.log(this.maxValue );
  this.voitures=this.store.select(getvoitures).pipe(map( (members) =>  members.filter(m =>m.prix>= this.minValue && m.prix<= this.maxValue ) ));


}
selectChangepagin(event: any) {

  this.pagin = event.target.value;
  console.log("pagin:" +this.pagin);
}


inputsearch()
{
  if(this.modelesearch!="")
 {
   this.voitures=this.store.select(getvoitures).pipe(map( (members) =>  members.filter(m =>m.modele.toLocaleLowerCase().match( this.modelesearch.toLocaleLowerCase())) ));

 }
 else if(this.modelesearch=="")
 {
   this.ngOnInit();
 }


}

}
