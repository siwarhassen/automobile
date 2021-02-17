import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marque } from '../../classes/marque.classe';
import { MarquesService } from '../../services/marque.service';
import { VoituresService } from '../../services/voitures.service';
import { Subscription } from 'rxjs';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import {Voiture} from '../../classes/voiture.classe';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';
import {Store,select} from '@ngrx/store';
import {CreateVoitureLoad} from '../../store/actions/voitures.action';
@Component({
  selector: 'app-ajouter-voiture',
  templateUrl: './ajouter-voiture.component.html',
  styleUrls: ['./ajouter-voiture.component.css']
})
export class AjouterVoitureComponent implements OnInit {
  public userId:string;
  public voitureForm: FormGroup;
    public errorMessage: string;
      public imagePreview: string;
      public imagePreview2: string;
        public imagePreview3: string;
          public imagePreview4: string;
            public imagePreview5: string;

marques:Marque[];
  constructor(private store:Store<any>,private auth:AuthService,private router:Router,private marquesService: MarquesService,private voitureService: VoituresService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.voitureForm = this.formBuilder.group({
    marque: ['', Validators.required],
    modele: ['', Validators.required],
    annee: [0, Validators.required],
    kilometrage: [0, Validators.required],
    prix: [0, [Validators.required,Validators.min(1000)]],
    adresse: ['', Validators.required],
    carosserie: ['', Validators.required],
    energie: ['', Validators.required],
    puissancefiscale: ['', Validators.required],
    boite: ['', Validators.required],
    transmission: ['', Validators.required],
    couleur: ['', Validators.required],
    description: ['', Validators.required],
      photo: ['', Validators.required],

    nbrcylindre: [0, Validators.required]

  });

    this.marques=this.marquesService.getMarques();
    this.userId=this.auth.userId;
  }

  onSubmit() {

  const voiture = new Voiture();
  voiture.marque = this.voitureForm.get('marque').value;
  voiture.modele = this.voitureForm.get('modele').value;
  voiture.kilometrage = this.voitureForm.get('kilometrage').value;
  voiture.prix = this.voitureForm.get('prix').value;
  voiture.annee = this.voitureForm.get('annee').value;
  voiture.adresse = this.voitureForm.get('adresse').value;
  voiture.telephone=53254782;
  voiture.nbrcylindre = this.voitureForm.get('nbrcylindre').value;
  //  voiture.photo = this.voitureForm.get('photo').value;
  voiture.nbreplace = 5;
  voiture.nbreporte = 5;
    voiture.description = this.voitureForm.get('description').value;
  voiture.couleur = this.voitureForm.get('couleur').value;
    voiture.transmission = this.voitureForm.get('transmission').value;
      voiture.boite = this.voitureForm.get('boite').value;
        voiture.puissancefiscale = this.voitureForm.get('puissancefiscale').value;
    voiture.energie = this.voitureForm.get('energie').value;
        voiture.carosserie = this.voitureForm.get('puissancefiscale').value;
    voiture.userId = this.userId;
voiture.photo = "";
    voiture.photo1 ="assets/img/cars/occasion/fordfocus.png";
      voiture.photo2 = "assets/img/cars/occasion/fordfocus.png";
      voiture.photo3 = "assets/img/cars/occasion/fordfocus.png";
      voiture.photo4 = "assets/img/cars/occasion/fordfocus.png";
        voiture.type = "old";
  //voiture._id = new Date().getTime().toString();
  //  voiture.photo = '';
    this.store.dispatch(new CreateVoitureLoad(voiture,this.voitureForm.get('photo').value));
      this.router.navigate(['monespace']);
  /*this.voitureService.ajoutervoitureimage(voiture,this.voitureForm.get('photo').value).then(
    () => {
      this.voitureForm.reset();
    this.router.navigate(['monespace']);
      }

  ).catch(
    (error) => {
    this.errorMessage = error.message;
    }
  );*/



};





onImagePick(event: Event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.voitureForm.get('photo').patchValue(file);
  this.voitureForm.get('photo').updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
    if (this.voitureForm.get('photo').valid) {
      this.imagePreview = reader.result as string;
    } else {
      this.imagePreview = null;
    }
  };
  reader.readAsDataURL(file);
}

onImagePick2(event: Event,ph) {
  const file = (event.target as HTMLInputElement).files[0];
  ph.patchValue(file);
  ph.updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
    if (ph.valid) {
      this.imagePreview2 = reader.result as string;
    } else {
      this.imagePreview2 = null;
    }
  };
  reader.readAsDataURL(file);
}
onImagePick3(event: Event,ph) {
  const file = (event.target as HTMLInputElement).files[0];
  ph.patchValue(file);
  ph.updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
    if (ph.valid) {
      this.imagePreview3 = reader.result as string;
    } else {
      this.imagePreview3 = null;
    }
  };
  reader.readAsDataURL(file);
}
onImagePick4(event: Event,ph) {
  const file = (event.target as HTMLInputElement).files[0];
  ph.patchValue(file);
  ph.updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
    if (ph.valid) {
      this.imagePreview4 = reader.result as string;
    } else {
      this.imagePreview4 = null;
    }
  };
  reader.readAsDataURL(file);
}
onImagePick5(event: Event,ph) {
  const file = (event.target as HTMLInputElement).files[0];
  ph.patchValue(file);
  ph.updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
    if (ph.valid) {
      this.imagePreview5 = reader.result as string;
    } else {
      this.imagePreview5 = null;
    }
  };
  reader.readAsDataURL(file);
}


}
