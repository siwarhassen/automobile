import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Params,ActivatedRoute } from '@angular/router';
import { VoituresService } from '../../services/voitures.service';
import {Voiture} from '../../classes/voiture.classe';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import {loadDeleteAction} from '../../store/actions/voitures.action';
import {Store,select} from '@ngrx/store';
import { filter } from 'rxjs/operators';
import {getvoitures} from '../../store/reducers/voitures.reducer';
import {loadmesvoituresAction} from '../../store/actions/voitures.action';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-mes-voitures',
  templateUrl: './mes-voitures.component.html',
  styleUrls: ['./mes-voitures.component.css']
})
export class MesVoituresComponent implements OnInit {
  voitures: Observable<Voiture[]>;
public voiture:Voiture;
public userId: string;
  constructor(private store:Store<any>,private auth:AuthService,private route:ActivatedRoute,private router:Router,private voitureService: VoituresService) { }

  ngOnInit(): void {


        this.userId = this.auth.userId;
    this.mesv();
  this.store.dispatch(new loadmesvoituresAction(this.userId));
    this.voitures=this.store.select(getvoitures);
  }
  mesv()
  { //const a="fd";
  /*  this.voitureService.mesvoitures(this.userId)
        .subscribe(  (res) =>{  this.voitures=res}

    );*/
  }





  onDelete(id) {
 if (confirm("Are You Sure You want to Delete the car?")) {
      this.store.dispatch(new loadDeleteAction(id));
      //  this.voitures=this.voitures.filter(voiture=>voiture._id!=id)
    }
        //   this.voitures=this.voitures.filter(voiture=>voiture._id!=id)
  }
}
