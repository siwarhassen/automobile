import { Component,OnDestroy, OnInit   } from '@angular/core';
import * as firebase from 'firebase';
import {TranslateService} from '@ngx-translate/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Params,ActivatedRoute } from '@angular/router';
import {Store} from '@ngrx/store';
import {storeInterface} from './store/store';
import {nSelectorId} from './store/reducers/user.reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  userId:number;
  title = 'i18nDemo';
 languageList = [
   { code: 'en', label: 'English' },

   { code: 'de', label: 'deutsh' }
 ];
 s:string;

  constructor(private store:Store<storeInterface>,private router:Router,private auth:AuthService,public translate:TranslateService)
  {

    translate.addLangs(["en","fr"]);
    translate.setDefaultLang('en');
    const browserLang=translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang:'en');
}
ngOnInit(): void {
  this.store.select(nSelectorId).subscribe(h=>this.s=h);
    this.store.select(nSelectorId).subscribe(h=>console.log("fsdx"+ h));
}


}
