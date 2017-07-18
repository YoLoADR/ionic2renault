import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { SignUpComponent } from './sign-up-component/sign-up.component';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    SignUpComponent
  ],
  entryComponents:[
  	SignUpComponent
  ]
})
export class SignUpModule {}
