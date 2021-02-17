import { Comment } from '../classes/comment.classe';

export class Voiture {
  _id:string;
  marque:string;
  modele:string;
  prix:number;
  kilometrage :number;
  annee:number;
  adresse:string;
  telephone:number;
  nbrcylindre:number;
  nbreplace:number;
  nbreporte:number;
  description:string;
  couleur:string;
  transmission:string;
  boite:string;
  puissancefiscale:string;
  energie:string;
  carosserie:string;
  photo:string;
  photo1:string;
  photo2:string;
  photo3:string;
  photo4:string;
    userId:string;
  type:string;
  comments: Comment[];

}
