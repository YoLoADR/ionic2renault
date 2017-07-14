import { Component } from '@angular/core';
import { LoginComponent } from './../../login/login-component/login.component';

import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpComponent {

  account: {email: string, password: string} = {
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private angularFireAuth: AngularFireAuth) {

  }

  signUp() {
    let loader = this.loadingController.create({
      content: "Please wait"
    });
    loader.present();

    this.angularFireAuth.auth.createUserWithEmailAndPassword(
      this.account.email,
      this.account.password
    ).then((value) => {
      loader.dismiss();
      this.navCtrl.pop(LoginComponent);
    }).catch((error) => {
      loader.dismiss();
      let errorMessage = error;
      if (errorMessage && errorMessage.message) {
        let message = errorMessage.message.replace(/<(?:.|\n)*?>/gm, '');
        let toast = this.toastController.create({
          message: message,
          duration: 6000,
          position: 'bottom'
        });
        toast.present();
       }
    });
  }

}
