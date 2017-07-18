

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { Profile } from "../../../models/profile";
//import { Profile } from './../../../models/profile';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountComponent {
  auth: any;
  loading: boolean;
  profileData: FirebaseObjectObservable<Profile>

  constructor(public navCtrl: NavController, 
    private angularFireAuth: AngularFireAuth,
    private angularFireDB: AngularFireDatabase,
    private toast : ToastController,
    public navParams : NavParams) {

  }

  ngOnInit() {
    this.IonViewWillLoad();
  }

  IonViewWillLoad() {
    this.angularFireAuth.authState.take(1).subscribe(data => {
      if(data){
        console.log("data", data);
        this.toast.create({
          message: `Bienvenue, ${data.email}`,
          duration: 3000
        }).present();
        this.profileData = this.angularFireDB.object(`profile/${data.uid}`);
      }
      else {
        this.toast.create({
          message: `Nous ne trouvons pas de details d'identification`,
          duration: 3000
        }).present();
      }
    })
  }

}
