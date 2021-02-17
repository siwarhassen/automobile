import { Component,OnDestroy, OnInit   } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {storeInterface} from '../store/store';
import {nSelectorId} from '../store/reducers/user.reducer';
import {ha} from '../store/actions/counter.action';
import { DataSharingService } from '../services/Datasharing.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isUserLoggedIn:boolean;

   Userid:String;
  constructor(private dataSharingService: DataSharingService,private location: Location,private store:Store<storeInterface>,private router:Router,private auth:AuthService,public translate:TranslateService)
  {
  console.log("hahaha" +this.isUserLoggedIn);
  this.store.select(nSelectorId).subscribe(h=>this.Userid=h);
  //this.store.select(nSelectorId).subscribe(h=>this.Userid=h);
  this.dataSharingService.isUserLoggedIn.subscribe( value => {
            this.isUserLoggedIn = value;
        });
    translate.addLangs(["en","fr"]);
    translate.setDefaultLang('en');
    const browserLang=translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang:'en');

}
  ngOnInit(): void {

    // this.LoadData();
  //  console.log("userId=====>",this.auth && this.auth.isAuth$  )
  //  console.log('userId22222', this.auth.getUserId())

}
increase()
{this.store.dispatch(new ha(2))

}




logout()
{
this.isUserLoggedIn=false;
  this.auth.logout();
    this.router.navigate(['']);
//  location.reload();


}


}
