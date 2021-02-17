import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoituresService } from '../services/voitures.service';
import {Voiture} from '../classes/voiture.classe';
import { MarquesService } from '../services/marque.service';
import {Marque} from '../classes/marque.classe';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-voitures-neuves',
  templateUrl: './voitures-neuves.component.html',
  styleUrls: ['./voitures-neuves.component.css']
})
export class VoituresNeuvesComponent implements OnInit {
     voitures: Voiture[];
     marques:Marque[];
    selectedVoiture: Voiture;
    public userId: string;

  constructor(private auth:AuthService,private router:Router,private marqueService: MarquesService) { }

  ngOnInit(): void {
            this.userId = this.auth.userId;
       this.marques = this.marqueService.getMarques();
  }
  allerpageAccueil()
  {
    this.router.navigate([''])
  }


}
