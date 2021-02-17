import { Voiture } from '../classes/voiture.classe';
import { voitures } from '../classes/voitures';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoituresService {
  constructor(private http: HttpClient) {}
  detailvoitures(id)
  {  return
      this.http.get<Voiture>('http://localhost:3000/api/detailvoiture/'+id);
  }

  voituresneuvesstore(marque)
  {  return  this.http.get<Voiture[]>('http://localhost:3000/api/nouvelles_voitures/'+marque);
  }
  modifyvoiture(id:string, voiture: Voiture, photo: File | string) {
      return new Promise((resolve, reject) => {
        let thingData: Voiture | FormData;
        if (typeof photo === 'string') {
          voiture.photo = photo;
          thingData = voiture;
        } else {
          thingData = new FormData();
          thingData.append('voiture', JSON.stringify(voiture));
          thingData.append('photo', photo, voiture.modele);
        }
        this.http.put('http://localhost:3000/api/modifiervoiture/'+id, thingData).subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
      });
    }
  supprimervoiture(id)
  {

  return  this.http.delete('http://localhost:3000/api/supprimervoiture/'+id);
}

  mesvoitures(userId)
  {    return  this.http.get<Voiture[]>('http://localhost:3000/api/mesvoitures/'+userId);


  }
  detailvoiture(id)
  {  return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/detailvoiture/'+id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  voituresneuves(marque)
  {  return new Promise((resolve, reject) => {
      this.http.get<Voiture[]>('http://localhost:3000/api/nouvelles_voitures/'+marque).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });

  }
  njarab()
  {
  return  this.http.get<Voiture[]>('http://localhost:3000/api/voitures_anciennes');
  }
  getVoitures(marque): Voiture[] {
    return voitures.filter((voiture) => (voiture.type === "new" && voiture.marque === marque));
  }
  getVoituresOld(): Voiture[] {
    return voitures.filter((voiture) => (voiture.type === "old"));
  }

  getVoiture(id): Voiture {
   return voitures.filter((voiture) => (voiture._id === id))[0];
 }

ajoutervideostore(voiture: Voiture) {
   return this.http.post<Voiture>('http://localhost:3000/api/ajoutervoiture', voiture);

}

ajoutervideo(voiture: Voiture) {
  return new Promise((resolve, reject) => {
    this.http.post('http://localhost:3000/api/ajoutervoiture', voiture).subscribe(
      (response) => {
        resolve(response);
      },
      (error) => {
        reject(error);
      }
    );
  });
}

ajoutervoitureimage(voiture: Voiture, photo: File) {
  return new Promise((resolve, reject) => {
    const thingData = new FormData();
    thingData.append('voiture', JSON.stringify(voiture));
    thingData.append('photo', photo, voiture.modele);
    this.http.post('http://localhost:3000/api/ajoutervoitureimage', thingData).subscribe(
      (response) => {
        resolve(response);
      },
      (error) => {
        reject(error);
      }
    );
  });
}


ajoutervoiturestate(voiture: Voiture, photo: File) {

    const thingData = new FormData();
    thingData.append('voiture', JSON.stringify(voiture));
    thingData.append('photo', photo, voiture.modele);
  return  this.http.post('http://localhost:3000/api/ajoutervoitureimage', thingData);

}



modeleparmarque(marque)
{  return new Promise((resolve, reject) => {
    this.http.get<Voiture[]>('http://localhost:3000/api/modeleparmarque/'+marque).subscribe(
      (response) => {
        resolve(response);
      },
      (error) => {
        reject(error);
      }
    );
  });
}







chercherancienne(marque,modele,kilometrage,annee)
{  return new Promise((resolve, reject) => {
    this.http.get<Voiture[]>('http://localhost:3000/api/chercherancienne/'+marque +'/'+modele  +'/'+kilometrage  +'/' +annee).subscribe(
      (response) => {
        resolve(response);
      },
      (error) => {
        reject(error);
      }
    );
  });
}




cherchernouvelles(marque,modele)
{  return new Promise((resolve, reject) => {
    this.http.get<Voiture[]>('http://localhost:3000/api/cherchernouvelle/'+marque +'/'+modele  ).subscribe(
      (response) => {
        resolve(response);
      },
      (error) => {
        reject(error);
      }
    );
  });
}

}
