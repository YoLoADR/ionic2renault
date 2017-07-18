import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { CreateAccountComponent } from './create-account-component/create-account.component';

@NgModule({
  declarations: [
  	CreateAccountComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    CreateAccountComponent
  ],
  entryComponents:[
  	CreateAccountComponent
  ]
})
export class CreateAccountModule {}