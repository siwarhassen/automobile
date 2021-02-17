import { Component, OnInit } from '@angular/core';
import { VoituresService } from '../../services/voitures.service';
import { FavorisService } from '../../services/favoris.service';
import { AuthService } from '../../services/auth.service';
import {Voiture} from '../../classes/voiture.classe';
import {Favoris} from '../../classes/favoris.classe';
import {Store,select} from '@ngrx/store';
import {loadfavorisAction} from '../../store/actions/favoris.action';
import {loaddeletefavorisAction} from '../../store/actions/favoris.action';
import {getfavoris} from '../../store/reducers/favoris.reducer';
import {concatMap,mergeMap,map,tap,catchError,switchMap} from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  totalRecords:number=10;
  modelesearch:string;
  page:number=1;
  marque:string;
favoris:Observable<Favoris[]>;
voitures=[];
id:number;

public userId: string;

  constructor(private store:Store<any>,private auth:AuthService,private voitureService: VoituresService,private favorisService: FavorisService) { }

  ngOnInit(): void {
            this.userId = this.auth.userId;
this.store.dispatch(new loadfavorisAction(this.userId));
              this.favoris=this.store.select(getfavoris);

  /*  this.favorisService.afficherlesfavoris(this.userId).then(
         (fav:Favoris[]) => {
        this.favoris=fav;

    if(fav.length>0){
        fav.map((item)=>{
          this.voitureService.detailvoiture(item.voiture._id).then(
            (voitu:Voiture) => {
           this.voitures=this.voitures.concat(voitu);

            }
          );

        })
      }
//this.totalRecords= this.voitures.length;console.log(this.page);


         }
       );*/



}



inputsearch()
{
  if(this.modelesearch!="")
 {
   this.favoris=this.store.select(getfavoris).pipe(map( (members) =>  members.filter(m =>m.voiture.modele.toLocaleLowerCase().match( this.modelesearch.toLocaleLowerCase())) ));

 }
 else if(this.modelesearch=="")
 {
   this.ngOnInit();
 }


}

onDelete(id) {
if (confirm("Are You Sure You want to Delete the car?")) {
     this.store.dispatch(new loaddeletefavorisAction(id));

  //  this.favoris=this.favoris.filter(favoris=>favoris._id!=id)
  }
      //   this.voitures=this.voitures.filter(voiture=>voiture._id!=id)
}

}
