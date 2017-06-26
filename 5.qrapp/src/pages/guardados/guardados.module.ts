import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuardadosPage } from './guardados';

@NgModule({
  declarations: [
    GuardadosPage,
  ],
  imports: [
    IonicPageModule.forChild(GuardadosPage),
  ],
  exports: [
    GuardadosPage
  ]
})
export class GuardadosPageModule {}
