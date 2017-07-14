import { Component } from '@angular/core';

import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database';
//import { Profile } from './../../../models/profile';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountComponent {
  auth: any;
  loading: boolean;
  profileData: any

  constructor(public navCtrl: NavController, 
    private angularFireAuth: AngularFireAuth,
    private angularFireDB: AngularFireDatabase,
    private toast : ToastController) {

  }

  ngOnInit() {
  }

  IonViewWillLoad() {
    this.angularFireAuth.authState.take(1).subscribe(data => {
      if(data && data.email  & data.uid){
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
