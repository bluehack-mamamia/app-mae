import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComparatorPage } from './comparator';

@NgModule({
  declarations: [
    ComparatorPage,
  ],
  imports: [
    IonicPageModule.forChild(ComparatorPage),
  ],
  exports: [
    ComparatorPage
  ]
})
export class ComparatorPageModule {}
