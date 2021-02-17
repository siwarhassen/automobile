import { Component, OnInit } from '@angular/core';
import {Voiture} from '../classes/voiture.classe';
import { MarquesService } from '../services/marque.service';
import {Marque} from '../classes/marque.classe';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Params,ActivatedRoute } from '@angular/router';
import { VoituresService } from '../services/voitures.service';
@Component({
  selector: 'app-recherchevoiture',
  templateUrl: './recherchevoiture.component.html',
  styleUrls: ['./recherchevoiture.component.css']
})
export class RecherchevoitureComponent implements OnInit {
  voitures: Voiture[];
  marques:Marque[];
  constructor(private route:ActivatedRoute,private router:Router,private voitureService: VoituresService) { }

  ngOnInit(): void {


    this.route.params.subscribe(
      (params: Params) => {
       if(params.type=="old")
       {   this.voitureService.chercherancienne(params.marque,params.modele,params.kilometrage,params.annee).then(
            (voitu:Voiture[]) => {
      this.voitures=voitu;
console.log(voitu);
            }
          );

       }

       else if (params.type=="new")
       {



         this.voitureService.cherchernouvelles(params.marque,params.modele).then(
             (voitu:Voiture[]) => {
        this.voitures=voitu;
        console.log(voitu);
             }
           );

       }



      }
    );
  }

}
