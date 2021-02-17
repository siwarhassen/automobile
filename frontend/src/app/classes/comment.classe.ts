
import { Voiture } from '../classes/voiture.classe';
import { User } from '../classes/user.classe';
export class Comment {
  _id:string;
  iduser:string;
  idvoiture:string;
  message:string;
  idcreplay:string;
  voiture:Voiture;
    user:User;

}
