import { ProductProvider } from './../../providers/product/product';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ComparatorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-comparator',
  templateUrl: 'comparator.html',
})
export class ComparatorPage {

  products: any = [];

  total: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public product: ProductProvider) {

    this.total = 0;

    this.product.get().subscribe(data => {
      this.products = data.splice(60,90);
    });

    for(let product of this.products){
      this.total += Number.parseInt(product.price.replace(',', '.'));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComparatorPage');
  }

}
