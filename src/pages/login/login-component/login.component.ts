import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { CreateAccountComponent } from './../../create-account/create-account-component/create-account.component';
import { SignUpComponent } from './../../sign-up/sign-up-component/sign-up.component';

@Component({
  templateUrl: './login.html'
})
export class LoginComponent {
  account: {email: string, password: string} = {
    email: '',
    password: ''
  };
  
  constructor(
    private navController: NavController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private angularFireAuth: AngularFireAuth) {}

  login() {
    let loader = this.loadingController.create({
      content: "Please wait"
    });
    loader.present();

    this.angularFireAuth.auth.signInWithEmailAndPassword(
      this.account.email,
      this.account.password
    ).then((value) => {
      loader.dismiss();
      this.navController.push(CreateAccountComponent);
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

  signUp() {
    this.navController.push(SignUpComponent);
  }
}
