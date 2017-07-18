import { Component } from '@angular/core';
import { AccountComponent } from './../../account/account-component/account.component'

import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from './../../../models/profile';

@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html'
})
export class CreateAccountComponent {
  auth: any;
  loading: boolean;
  profile = {} as Profile;

  constructor(public navCtrl: NavController, 
    private angularFireAuth: AngularFireAuth,
    private angularFireDB: AngularFireDatabase) {

  }

  ngOnInit() {
  }

  createProfile() {
    this.angularFireAuth.authState.take(1).subscribe(auth => {
      this.angularFireDB.object(`profile/${auth.uid}`).set(this.profile)
      .then(()=> this.navCtrl.setRoot(AccountComponent));
    });
  }

}
