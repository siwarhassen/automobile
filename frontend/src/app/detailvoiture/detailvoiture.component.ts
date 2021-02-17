import { Component, OnInit } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { VoituresService } from '../services/voitures.service';
import {Voiture} from '../classes/voiture.classe';
import {Favoris} from '../classes/favoris.classe';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { FavorisService } from '../services/favoris.service';
import {Store,select} from '@ngrx/store';
import {loaddeletefavorisAction} from '../store/actions/favoris.action';
import {loadcommentsAction} from '../store/actions/comments.action';
import {getcomments} from '../store/reducers/comments.reducer';
import {loadverifierfavorisAction} from '../store/actions/favoris.action';
import {getfavoris} from '../store/reducers/favoris.reducer';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import {Comment} from '../classes/comment.classe';
import {User} from '../classes/user.classe';
import { Observable } from 'rxjs/Observable';
import { CommentService } from '../services/comment.service';
import {loadajoutcommentAction} from '../store/actions/comments.action';
import {loadajoutfavorisAction} from '../store/actions/favoris.action';
import {loaddeletecommentAction} from '../store/actions/comments.action';
  import { ToastrManager } from 'ng6-toastr-notifications';
  import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-detailvoiture',
  templateUrl: './detailvoiture.component.html',
  styleUrls: ['./detailvoiture.component.css']
})
export class DetailvoitureComponent implements OnInit {
  title = 'My first AGM project';
 lng =10.600927;
 lat = 35.824766;
voiture:Voiture;
favoris:Favoris;
comments:Observable<Comment[]>;
public userId: string;
verifierf:boolean=true;
n=0;
public commentForm: FormGroup;
  constructor(public dialog: MatDialog,private store:Store<any>,private commentservice:CommentService,public toastr: ToastrManager,private formBuilder: FormBuilder,private favorisservice:FavorisService,private auth:AuthService,private router:ActivatedRoute,private voitureService: VoituresService) { }

  ngOnInit(): void {



/*  this.commentservice.affichercomments().then(
      (comm:Comment[]) => {

     this.comments=comm;
      }
    );*/



    this.commentForm = this.formBuilder.group({
    message: ['', Validators.required]

  });
    this.userId = this.auth.userId;
  //   const id = this.router.snapshot.params['id'];

         this.router.params.subscribe(
           (params: Params) => {
             this.voitureService.detailvoiture(params.id).then(
               (voitu:Voiture) => {

              this.voiture=voitu;
               this.store.dispatch(new loadcommentsAction(voitu._id));

  /*   this.store.dispatch(new loadverifierfavorisAction(this.userId,voitu._id));
     this.favoris=this.store.select(getfavoris);*/
              this.favorisservice.verifierfavoris(this.userId,voitu._id).then(
                    (fav:Favoris) => {
                   this.favoris=fav;

  console.log(fav)


                    }
                  );



               }
             );
           }
         );

    this.comments=this.store.select(getcomments);

       if(this.favoris!=null)
       {
         this.verifierf=false
       }

  }

ajouterfav(voiture)
{  const user=new User();
  user._id=this.userId;
   const f=new Favoris();
   f.user=user;
   f.voiture=this.voiture;

    this.store.dispatch(new loadajoutfavorisAction(f));
    this.favoris=f;
      this.toastr.successToastr('Voiture ajoutée à vos favoris.');
/*this.favorisservice.ajouterfavoris(favoris)
.then(
  () => {
  //  console.log(id);
    this.toastr.successToastr('Voiture ajoutée à vos favoris.');
    }

).catch(
  (error) => {
  console.log("dd");
  }
);*/

}
onSubmit() {

const comment = new Comment();
const user=new User();
user._id=this.userId;

comment.message = this.commentForm.get('message').value;
comment.iduser=this.userId;
comment.idcreplay=null;
comment.voiture=this.voiture;

comment.user=user;
comment.idvoiture=this.voiture._id;
/*this.commentservice.ajoutercomment(comment).then(
  () => {
    this.commentForm.reset();
    }

).catch(
  (error) => {

  }
);*/
    this.store.dispatch(new loadajoutcommentAction(comment));
  this.commentForm.reset();


};

onDelete() {

//  this.favorisservice.supprimerfavoris(     this.favoris._id);

 this.store.dispatch(new loaddeletefavorisAction(  this.favoris._id));

      this.ngOnInit();

}
deletecomment(id)
{
  this.store.dispatch(new loaddeletecommentAction( id));
}

openDialog() {
   this.dialog.open(partagersocialmedia);
 }
}

@Component({
  selector: 'dialog-elements-example-dialog',
templateUrl: './partagersocialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class partagersocialmedia {}
