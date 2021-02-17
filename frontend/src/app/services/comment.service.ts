import { Comment } from '../classes/comment.classe';

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) {}


ajoutercomment(comment: Comment) {
  return new Promise((resolve, reject) => {

      this.http.post<Comment>('http://localhost:3000/api/ajoutercomment',comment).subscribe(
      (response) => {
        resolve(response);
      },
      (error) => {
        reject(error);
      }
    );
  });

}


ajoutercommentstore(comment: Comment) {
  return this.http.post<Comment>('http://localhost:3000/api/ajoutercomment',comment);

}
affichercommentsstore(idvoiture) {
  return  this.http.get<Comment[]>('http://localhost:3000/api/affichercomments/'+idvoiture);
}

supprimercommentaire(id)
{ return  this.http.delete('http://localhost:3000/api/supprimercommentaire/'+id);

}



}
