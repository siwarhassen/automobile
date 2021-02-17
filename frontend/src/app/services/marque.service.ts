import { Marque } from '../classes/marque.classe';
import { marques } from '../classes/marques';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable({
  providedIn: 'root'
})
export class MarquesService {
  getMarques(): Marque[] {
    return marques;
  }


  constructor() { }
}
