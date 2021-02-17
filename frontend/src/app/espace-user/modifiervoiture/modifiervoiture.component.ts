import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Marque } from '../../classes/marque.classe';
import { MarquesService } from '../../services/marque.service';
import { VoituresService } from '../../services/voitures.service';
import { Subscription } from 'rxjs';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import {Voiture} from '../../classes/voiture.classe';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-modifiervoiture',
  templateUrl: './modifiervoiture.component.html',
  styleUrls: ['./modifiervoiture.component.css']
})
export class ModifiervoitureComponent implements OnInit {

  public voitureForm: FormGroup;
    public voiture:Voiture;
    public errorMessage: string;
      public imagePreview: string;
      public imagePreview2: string;
        public imagePreview3: string;
          public imagePreview4: string;
            public imagePreview5: string;
marques:Marque[];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private marquesService: MarquesService,
              private voitureService: VoituresService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.marques=this.marquesService.getMarques();

    this.route.params.subscribe(
    (params) => {
      this.voitureService.detailvoiture(params.id).then(
        (voiture: Voiture) => {
          this.voiture = voiture;
          this.voitureForm = this.formBuilder.group({
            marque: [voiture.marque, Validators.required],
            modele: [voiture.modele, Validators.required],
            annee: [voiture.annee, Validators.required],
            kilometrage: [voiture.kilometrage, Validators.required],
            prix: [voiture.prix, [Validators.required,Validators.min(1000)]],
            adresse: [voiture.adresse, Validators.required],
            carosserie: [voiture.carosserie, Validators.required],
            energie: [voiture.energie, Validators.required],
            puissancefiscale: [voiture.puissancefiscale, Validators.required],
            boite: [voiture.boite, Validators.required],
            transmission: [voiture.transmission, Validators.required],
            couleur: [voiture.couleur, Validators.required],
            description: [voiture.description, Validators.required],
              photo: [voiture.photo, Validators.required],
            nbrcylindre: [voiture.nbrcylindre, Validators.required]


          });
          this.imagePreview = voiture.photo;

        }
      );
    }
  );


  }

  onSubmit() {

  const voiture = new Voiture();
    voiture._id = this.voiture._id;
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
    voiture.userId = "fd";
voiture.photo = "";
    voiture.photo1 ="assets/img/cars/occasion/fordfocus.png";
      voiture.photo2 = "assets/img/cars/occasion/fordfocus.png";
      voiture.photo3 = "assets/img/cars/occasion/fordfocus.png";
      voiture.photo4 = "assets/img/cars/occasion/fordfocus.png";
        voiture.type = "old";
  //voiture._id = new Date().getTime().toString();
  //  voiture.photo = '';

  this.voitureService.modifyvoiture(this.voiture._id,voiture,this.voitureForm.get('photo').value).then(
    () => {
    //  this.voitureForm.reset();
    this.router.navigate(['monespace']);
      }

  ).catch(
    (error) => {
    this.errorMessage = error.message;
    }
  );
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
