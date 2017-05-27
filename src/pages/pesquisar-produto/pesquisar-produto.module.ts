import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesquisarProdutoPage } from './pesquisar-produto';

@NgModule({
  declarations: [
    PesquisarProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(PesquisarProdutoPage),
  ],
  exports: [
    PesquisarProdutoPage
  ]
})
export class PesquisarProdutoPageModule {}
