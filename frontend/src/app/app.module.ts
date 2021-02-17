import { BrowserModule } from '@angular/platform-browser';
import { ValidateEqualModule } from 'ng-validate-equal';
import {MatDialogModule} from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoituresNeuvesComponent } from './voitures-neuves/voitures-neuves.component';
import { VoituresOccasionsComponent } from './voitures-occasions/voitures-occasions.component';
import { RouterModule,Routes } from '@angular/router';
import { VoituresMarqueComponent } from './voitures-neuves/voitures-marque/voitures-marque.component';
import {nouvellevoituresFilter} from './voitures-neuves/voitures-marque/voiture-filter.pipe';
import {anciennevoituresFilter} from './voitures-occasions/voitureancienne-filter.pipe';

import { DetailvoitureComponent } from './detailvoiture/detailvoiture.component';
import { partagersocialmedia } from './detailvoiture/detailvoiture.component';
import { AccueilComponent } from './accueil/accueil.component';
import { StatComponent } from './stat/stat.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EspaceUserComponent } from './espace-user/espace-user.component';
import { AjouterVoitureComponent } from './espace-user/ajouter-voiture/ajouter-voiture.component';
import {VoituresService} from './services/voitures.service';
import {CommentService} from './services/comment.service';
import { AgmCoreModule } from '@agm/core';
import {FavorisService} from './services/favoris.service';
import {DataSharingService} from './services/Datasharing.service';

import {MarquesService} from './services/marque.service';
import {AuthService} from './services/auth.service';
import {UsersService} from './services/User.service';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MesVoituresComponent } from './espace-user/mes-voitures/mes-voitures.component';
import {voitures} from './classes/voitures';
import {ChartsModule} from 'ng2-charts';
import {MatInputModule} from '@angular/material/input';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import{TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ModifiervoitureComponent } from './espace-user/modifiervoiture/modifiervoiture.component';

import { HeaderComponent } from './header/header.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducers} from './store/store';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './store/effects/user.effect';
import {commentsEffects} from './store/effects/comments.effects';
import {voituresEffects} from './store/effects/voitures.effects';
import {favorisEffects} from './store/effects/favoris.effects';

import { NgxSocialShareModule } from 'ngx-social-share';
 import { ToastrModule } from 'ng6-toastr-notifications';
import { FavorisComponent } from './espace-user/favoris/favoris.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareButtonModule } from '@ngx-share/button';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecherchevoitureComponent } from './recherchevoiture/recherchevoiture.component';
import { Ng5SliderModule } from 'ng5-slider';
export function HttpLoaderFactory(http:HttpClient)
{return new TranslateHttpLoader(http);}
const appRoutes: Routes = [
      { path: 'recherchevoiture/:marque/:modele/:kilometrage/:annee/:type', component: RecherchevoitureComponent },
  { path: 'mesfavoris', component: FavorisComponent },
  { path: 'voitureNeuves', component: VoituresNeuvesComponent },
  { path: 'voituresMarque/:marque', component: VoituresMarqueComponent },
  { path: 'voituresOccasions', component: VoituresOccasionsComponent },
    { path: 'ajoutervoiture', component: AjouterVoitureComponent },
      { path: 'modifiervoiture/:id', component: ModifiervoitureComponent },
  { path: 'detailvoiture/:id', component: DetailvoitureComponent },
  { path: 'stat', component: StatComponent },
    { path: 'monespace', component: EspaceUserComponent },
      { path: 'mesvoitures', component: MesVoituresComponent },
  { path: 'inscription', component: InscriptionComponent
 },
  { path: '', component: AccueilComponent },
  { path: '*', redirectTo: 'accueil' },


];
@NgModule({
  declarations: [
    AppComponent,
nouvellevoituresFilter,
anciennevoituresFilter,
    VoituresNeuvesComponent,
    VoituresOccasionsComponent,
    VoituresMarqueComponent,
    DetailvoitureComponent,
    partagersocialmedia,
    AccueilComponent,
    StatComponent,
    InscriptionComponent,
    EspaceUserComponent,
    AjouterVoitureComponent,

    MesVoituresComponent,

    ModifiervoitureComponent,

    HeaderComponent,

    FavorisComponent,

    RecherchevoitureComponent,

  ],
  imports: [
    BrowserModule,
      ValidateEqualModule,
      Ng5SliderModule,
    FontAwesomeModule,
    ShareButtonsModule.withConfig({
    debug: true
  }),
  ShareButtonModule.withConfig({
  debug: true
}),

    ShareIconsModule,

    NgxSocialShareModule,
    NgxPaginationModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyC0KmYy7y2EZmllLsRVyKq_6tpTuF9iywM'
   }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([voituresEffects,UserEffects,commentsEffects,favorisEffects]),
    StoreDevtoolsModule.instrument({
      maxAge:false
    }),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    ChartsModule,
      TranslateModule.forRoot({
        loader:{    provide:TranslateLoader,
            useFactory:HttpLoaderFactory,
            deps:[HttpClient]}


      }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataSharingService,
VoituresService,
MarquesService,
UsersService,
FavorisService,
CommentService,
AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
