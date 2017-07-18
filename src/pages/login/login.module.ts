import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';

import { LoginComponent } from './login-component/login.component';
import { AccountComponent } from './../account/account-component/account.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    LoginComponent
  ],
  entryComponents:[
  	LoginComponent,
    AccountComponent
  ]
})
export class LoginModule {}
