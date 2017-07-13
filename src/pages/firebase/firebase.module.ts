import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseHomeComponent } from './firebase-home/firebase-home.component';
import { FirebaseLoginComponent } from './firebase-login/firebase-login.component';
import { FirebaseSignUpComponent } from './firebase-sign-up/firebase-sign-up.component';
import { FirebaseResetPasswordComponent } from './firebase-reset-password/firebase-reset-password.component';

var config = {
    apiKey: "AIzaSyBYAP5g8BXUKWeLdmfoTJoxi4uAbNR1TzE",
    authDomain: "ionicrenaultapp.firebaseapp.com",
    databaseURL: "https://ionicrenaultapp.firebaseio.com",
    projectId: "ionicrenaultapp",
    storageBucket: "ionicrenaultapp.appspot.com",
    messagingSenderId: "395294032878"
  };

@NgModule({
  declarations: [
    FirebaseHomeComponent,
    FirebaseLoginComponent,
    FirebaseSignUpComponent,
    FirebaseResetPasswordComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  exports: [
    FirebaseHomeComponent,
    FirebaseLoginComponent,
    FirebaseSignUpComponent,
    FirebaseResetPasswordComponent
  ],
  entryComponents:[
    FirebaseHomeComponent,
    FirebaseLoginComponent,
    FirebaseSignUpComponent,
    FirebaseResetPasswordComponent
  ]
})
export class FirebaseModule {}
