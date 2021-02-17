import { Component, OnInit } from '@angular/core';
import {PipeTransform} from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { Router } from '@angular/router';
import { Params,ActivatedRoute } from '@angular/router';
import { VoituresService } from '../../services/voitures.service';
import {Voiture} from '../../classes/voiture.classe';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import {Store,select} from '@ngrx/store';
import {concatMap,mergeMap,map,tap,catchError,switchMap} from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import {getnouvellesvoitures} from '../../store/reducers/voitures.reducer';
import {loadnouvellesvoituresAction} from '../../store/actions/voitures.action';
@Component({
  selector: 'app-voitures-marque',
  templateUrl: './voitures-marque.component.html',
  styleUrls: ['./voitures-marque.component.css']
})
export class VoituresMarqueComponent implements OnInit {
  totalRecords:number=10;
  page:number=1;
  pagin:number=8;
  i:number;
  voitures: Observable<Voiture[]>;

 selectedVoiture: Voiture;
 modelesearch:string;


boite:string="";
transmission:string="";
annee:number=0;
couleur:string="";
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
  constructor(private store:Store<any>,private route:ActivatedRoute,private router:Router,private voitureService: VoituresService) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
          this.store.dispatch(new loadnouvellesvoituresAction(params.marque));

      /*  this.voitureService.voituresneuves(params.marque).then(
          (voitu:Voiture[]) => {

         this.voitures=voitu;
          }
        );*/


      }
    );
  this.voitures=this.store.select(getnouvellesvoitures);

  }
  allerpageAccueil()
  {
    this.router.navigate([''])
  }
  selectChangeboite (event: any) {

    this.boite = event.target.value;
    console.log("boite:" +this.boite);
  }
  selectChangetransmission(event: any) {

    this.transmission = event.target.value;
    console.log("transmission:" +this.transmission);
  }


  selectChangeannee(event: any) {

    this.annee = event.target.value;
    console.log("annee:" +this.annee);
  }
  selectChangecouleur(event: any) {

    this.couleur = event.target.value;
    console.log("couleur:" +this.couleur);
  }
  selectChangepagin(event: any) {

    this.pagin = event.target.value;
    console.log("pagin:" +this.pagin);
  }

  inputsearch()
  {
    if(this.modelesearch!="")
   {
     this.voitures=this.store.select(getnouvellesvoitures).pipe(map( (members) =>  members.filter(m =>m.modele.toLocaleLowerCase().match( this.modelesearch.toLocaleLowerCase())) ));

   }
   else if(this.modelesearch=="")
   {
     this.ngOnInit();
   }


  }



}
