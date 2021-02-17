import { Favoris } from '../classes/favoris.classe';

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { HttpClient ,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {
  constructor(private http: HttpClient) {}


ajouterfavoris(favoris: Favoris) {
  return new Promise((resolve, reject) => {

      this.http.post<Favoris>('http://localhost:3000/api/ajouterfavoris',favoris).subscribe(
      (response) => {
        resolve(response);
      },
      (error) => {
        reject(error);
      }
    );
  });

}


afficherlesfavoris(iduser) {
  return new Promise((resolve, reject) => {

      this.http.get<Favoris[]>('http://localhost:3000/api/afficherf/'+iduser).subscribe(
      (response) => {
        resolve(response);
      },
      (error) => {
        reject(error);
      }
    );
  });

}


verifierfavoris(iduser,idvoiture) {
  return new Promise((resolve, reject) => {

      this.http.get<Favoris>('http://localhost:3000/api/verifierfavoris/' +iduser +'/' +idvoiture).subscribe(
      (response) => {
        resolve(response);
      },
      (error) => {
        reject(error);
      }
    );
  });

}

supprimerfavoris(id)
{ return  this.http.delete('http://localhost:3000/api/supprimerfavoris/'+id);

}



}
