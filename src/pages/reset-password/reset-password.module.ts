import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';

import { ResetPasswordComponent } from './reset-password-component/reset-password.component';

@NgModule({
  declarations: [
    ResetPasswordComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    ResetPasswordComponent
  ],
  entryComponents:[
  	ResetPasswordComponent
  ]
})
export class ResetPasswordModule {}
