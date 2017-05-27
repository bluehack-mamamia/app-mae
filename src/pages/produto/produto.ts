import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProdutoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  product: any = {
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/112dd3fe99fa7a360cc1f2a4b71847c1.png",
      "name": "Arroz Parboilizado Ouro Nobre 5kg "
    };

  prices: any = [0, 0, 0, 0, 0, 0, 0];

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }



}
